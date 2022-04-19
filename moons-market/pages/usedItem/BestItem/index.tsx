import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { IQuery } from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const FETCH_Useditem_OF_THE_BEST = gql`
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
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: #fffafb;
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
`;
export const CardImage = styled.img`
  height: 190px;
  width: 300px;
  background-image: url("/랜딩.webp");
`;

export const ProductName = styled(Typography)`
  height: 50px;
`;
export const ProductInfo = styled(Typography)`
  background-color: azure;
  height: 70px;
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
  const { data } = useQuery(FETCH_Useditem_OF_THE_BEST);
  console.log(data);

  const router = useRouter();

  const onClickBest = (event: any) => {
    router.push(`/usedItem/${event.currentTarget.id}`);
  };

  return (
    <div>
      <BackGround>
        <BestTitle>MOONS PICK</BestTitle>
        <BestProduct>
          <Contents>
            {data?.fetchUseditemsOfTheBest.map((el: any, index: number) => (
              <div key={el._id}>
                <MyCard id={el._id} onClick={onClickBest}>
                  <CardImage
                    src={`https://storage.googleapicom/${el.images}`}
                  />
                  <CardContent>
                    <ProductName gutterBottom variant="h5">
                      {el.name}
                    </ProductName>
                    <ProductInfo variant="body2" color="text.secondary">
                      가격 : {el.price}
                      <br />
                      내용 : {el.contents}
                    </ProductInfo>
                  </CardContent>
                  <CardButton>
                    <Button size="small">찜</Button>
                    <Button size="small">더 알아보기</Button>
                  </CardButton>
                </MyCard>
              </div>
            ))}{" "}
          </Contents>
        </BestProduct>
      </BackGround>
    </div>
  );
}
