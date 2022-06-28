import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";
import { todayProductState } from "../../../src/commons/store";
import DOMPurify from "dompurify";

export const FETCH_USED_ITEM_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      # useditemAddress
      # buyer
      # seller
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const BackGround = styled.div`
  width: 1920px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1600px;
  justify-content: center;
  align-items: center;
`;
export const MyCard = styled(Card)`
  margin: 15px;
  height: 400px;
  width: 300px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 4px 20px gray;
  }
`;
export const CardImage = styled.img`
  height: 190px;
  width: 300px;
`;

export const ProductName = styled(Typography)`
  height: 50px;
`;
export const ProductInfo = styled.div`
  height: 70px;
  font-size: 20px;
`;
export const MyCardContent = styled(CardContent)`
  .MuiTypography-root {
    background-color: white;
  }
`;
export const CardButton = styled(CardActions)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 15px;
  width: 300px;
  background-color: aqua;
`;

export const BestProduct = styled.div``;
export const BestTitle = styled.div`
  font-size: 50px;
  color: #ffb041;
  font-style: italic;
  width: 1000px;
`;

export default function BestProductPage() {
  const { data } = useQuery(FETCH_USED_ITEM_OF_THE_BEST);
  console.log(data);
  const [, setTodayProduct] = useRecoilState(todayProductState);

  const router = useRouter();

  // const onClickBest = (event: any) => {
  //   router.push(`/usedItem/${event.currentTarget.id}`);
  // };
  const onClickBest = (el) => (event) => {
    const todayProduct = JSON.parse(
      localStorage.getItem("todayProduct") || "[]"
    );
    const temp = todayProduct.filter((El: any) => El._id === el._id);
    if (temp.length === 0) {
      todayProduct.push(el);
      localStorage.setItem("todayProduct", JSON.stringify(todayProduct));
      setTodayProduct(todayProduct);
    }

    if (event.target instanceof Element)
      router.push(`/usedItem/${event.currentTarget.id}`);
    //   instanceof HTMLDivElement라고 써도됨 웹브라우저마다 상황이달라서 타입스크립트에서 못만듬
  };

  return (
    <div>
      <BackGround>
        <BestTitle>MOONS PICK</BestTitle>
        <BestProduct>
          <Contents>
            {data?.fetchUseditemsOfTheBest.map((el: any, index: number) => (
              <div key={el._id}>
                <MyCard id={el._id} onClick={onClickBest(el)}>
                  {el.images[0] ? (
                    <CardImage
                      style={{ objectFit: "cover" }}
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  ) : (
                    <CardImage
                      src={"/noimg.png"}
                      style={{ objectFit: "cover" }}
                    />
                  )}
                  <MyCardContent>
                    <ProductName gutterBottom variant="h5">
                      {el.name}
                    </ProductName>
                    <ProductInfo>
                      가격 : {el.price}
                      <br />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(el.contents),
                        }}
                      ></div>
                    </ProductInfo>
                  </MyCardContent>
                  <CardButton></CardButton>
                </MyCard>
              </div>
            ))}{" "}
          </Contents>
        </BestProduct>
      </BackGround>
    </div>
  );
}
