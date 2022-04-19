import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Button } from "antd";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import { getDate } from "../../../src/components/units/libraries/util";

export const Back = styled.div`
  margin-top: 30px;
  width: 1000px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const BackGround = styled.div`
  width: 1000px;
  border-bottom: 1px solid #e8e7e7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;
export const LeftBody = styled.div`
  margin-right: 20px;
  width: 480px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 3px solid #aeddb5;
  border-radius: 30px;
`;

export const RightBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 20px 20px;
`;
export const TopBack = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TopLeft = styled.div`
  width: 400px;

  height: 50px;
  border-top: 1px solid #e8e7e7;
  border-bottom: 1px solid #e8e7e7;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const ProFilePhoto = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  line-height: 80px;
  background-image: url("/프로필.png");
  background-size: cover;
`;
export const NameDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const Name = styled.div`
  font-size: 16px;
  height: 18px;
  margin-right: 10px;
  line-height: 20px;
`;
export const Date = styled.div`
  font-size: 16px;
  height: 18px;
  line-height: 20px;
  color: #828282;
`;

export const ResponseDataBox = styled.div`
  width: 500px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleBox = styled.div`
  width: 400px;
  height: 80px;
  font-size: 36px;
  font-weight: bold;
  line-height: 80px;
`;
export const PriceBox = styled.div`
  width: 400px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
`;
export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const IMG = styled.img`
  width: fit-content;
  max-width: 480px;
  max-height: 500px;
`;
export const RemarkBox = styled.div`
  margin-top: 50px;
  width: 400px;
  min-height: 200px;
`;
export const ProductButtonBox = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

export const MyButton = styled(Button)`
  width: 80px;
  height: 50px;
  margin-right: 15px;
  margin-left: 15px;
  cursor: pointer;
  color: #55d274;
  border-radius: 10px;
  border: 3px #fbc06e solid;
`;

export const DetailTitle = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid #ffa600;
  text-align: center;
  font-size: 20px;
  line-height: 50px;
  border-radius: 15px;
  margin-bottom: 20px;
`;
export const DetailBox = styled.div`
  width: 1000px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductDetailBox = styled.div`
  width: 1000px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        _id
        email
        name
        picture
      }

      createdAt

      createdAt
    }
  }
`;

export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.productId) },
  });
  console.log(router);

  console.log(data);

  const OnClickEdit = () => {
    router.push(`/usedItem/${router.query.productId}/edit`);
  };

  const OnClickList = () => {
    router.push("/usedItem");
  };
  const OnClickBuy = () => {};

  return (
    <>
      <Back>
        <BackGround>
          <LeftBody>
            <IMG
              src={`https://storage.googleapis.com/${data?.fetchUseditem.images[0]}`}
            />
          </LeftBody>
          <RightBody>
            <ResponseDataBox>
              <TitleBox>{data?.fetchUseditem.name}</TitleBox>
              <PriceBox>희망거래가격 : {data?.fetchUseditem.price}원</PriceBox>
              <TopBack>
                <TopLeft>
                  <ProFilePhoto></ProFilePhoto>
                  <NameDate>
                    <Name>{data?.fetchUseditem.seller.name}</Name>
                    <Date>{getDate(data?.fetchUseditem?.createdAt)}</Date>
                  </NameDate>
                </TopLeft>
              </TopBack>
              <RemarkBox>{data?.fetchUseditem.remarks}</RemarkBox>
            </ResponseDataBox>
            <ProductButtonBox>
              <MyButton onClick={OnClickEdit}>수정하기</MyButton>
              <MyButton onClick={OnClickList}>목록으로</MyButton>
              <MyButton onClick={OnClickBuy}>구매하기</MyButton>
              <MyButton onClick={OnClickBuy}>장바구니</MyButton>
            </ProductButtonBox>
          </RightBody>
        </BackGround>
        <DetailBox>
          <DetailTitle>제품상세</DetailTitle>
          <ImageBox>
            {data?.fetchUseditem.images
              ?.filter((el: any) => el)
              .map((el: any) => (
                <IMG key={el} src={`https://storage.googleapis.com/${el}`} />
              ))}
          </ImageBox>
          <ProductDetailBox>{data?.fetchUseditem.contents}</ProductDetailBox>
        </DetailBox>
      </Back>
    </>
  );
}
