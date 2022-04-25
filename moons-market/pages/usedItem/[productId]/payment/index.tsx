import { gql, OperationVariables, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { async } from "@firebase/util";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
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
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;
export const CREATE_POINT_TRANSATION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;

const Back = styled.div`
  margin-top: 150px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 1200px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ProductBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  width: 60vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.div`
  max-width: 1200px;
  min-width: 800px;
  width: 60vw;
  height: 60px;
  border-bottom: orange 1px solid;
  padding-left: 20px;
  font-weight: bold;
  color: #25d125;
  font-size: 35px;
`;
const BasketItem = styled.div`
  max-width: 1200px;
  min-width: 800px;
  width: 60vw;
  font-size: 35px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const ProductCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  border-radius: 30px;
  :hover {
    -webkit-box-shadow: inset 2px 2px 88px -49px rgba(155, 255, 150, 1);
    -moz-box-shadow: inset 2px 2px 88px -49px rgba(155, 255, 150, 1);
    box-shadow: inset 2px 2px 88px -49px rgba(155, 255, 150, 1);
  }
`;
export const ImgBody = styled.div`
  padding: 10px;
  margin-right: 20px;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #aeddb5;
  border-radius: 30px;
`;
export const IMG = styled.img`
  width: 100%;
  height: 100%;
`;

export const TitleBox = styled.div`
  padding-left: 20px;
  width: 400px;
  max-height: 80px;
  font-size: 30px;
  font-weight: bold;
  line-height: 80px;
`;
export const RemarkBox = styled.div`
  padding-left: 20px;
  width: 400px;
  min-height: 50px;
  font-size: 16px;
`;
export const PriceBox = styled.div`
  text-align: center;

  width: 200px;
  font-size: 25px;
  font-weight: bold;
  color: #eea00f;
`;
export const Name = styled.div`
  color: #000000;
  text-align: center;
  width: 200px;

  font-size: 16px;
  height: 18px;
  margin-right: 10px;
  line-height: 20px;
`;
export const PaymentBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  width: 60vw;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UserInfo = styled.div`
  max-width: 1200px;
  min-width: 800px;
  width: 60vw;
  font-size: 20px;
  padding: 20px 0px;
  border-top: orange 1px solid;
`;
export const PaymentPriceBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  width: 60vw;
  border-top: #bdbdbd solid 1px;
  border-bottom: #bdbdbd solid 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  margin-bottom: 30px;
`;
export const PaymentTitle = styled.div`
  font-size: 25px;
`;
export const PaymentPrice = styled.div`
  font-size: 25px;
`;
export const PaymentButton = styled.button`
  background-color: white;
  width: 250px;
  height: 60px;
  border-radius: 10px;
  border: orange 5px solid;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: #0bc10b;
  }
`;

export default function MyBasketPage() {
  const { data: userData } = useQuery<
    Pick<IQuery, "fetchUserLoggedIn">,
    OperationVariables
  >(FETCH_USER_LOGGED_IN, { variables: {} });

  const router = useRouter();
  const productId = router.query.productId;
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSATION_OF_BUYING_AND_SELLING
  );
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(productId) },
  });

  const onClickProduct = () => {
    router.push(`/usedItem/${productId}`);
  };

  const onClickPayment = async () => {
    if (
      userData?.fetchUserLoggedIn.userPoint.amount - data?.fetchUseditem.price <
      0
    ) {
      Modal.info({
        content: "잔여 포인트가 부족합니다. 충전페이지로 이동합니다.",
      });
      router.push(`/mypage`);
      return;
    }

    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: productId,
        },
      });
      console.log(result);
      Modal.info({ content: "상품이 구매되었어요!" });
      router.push(`/usedItem`);
    } catch (errors) {
      Modal.error({ content: errors.message });
    }
  };
  return (
    <>
      <Back>
        <Wrapper>
          <Title>장바구니</Title>
          <ProductBox>
            <BasketItem>
              <ImgBody>
                {data?.fetchUseditem.images[0] ? (
                  <IMG
                    style={{ objectFit: "cover" }}
                    src={`https://storage.googleapis.com/${data?.fetchUseditem.images[0]}`}
                  />
                ) : (
                  <IMG style={{ objectFit: "cover" }} src={"/사진없음.png"} />
                )}
              </ImgBody>
              <ProductCol onClick={onClickProduct}>
                <TitleBox>{data?.fetchUseditem.name}</TitleBox>
                <RemarkBox>{data?.fetchUseditem.remarks}</RemarkBox>
              </ProductCol>
              <Col>
                <PriceBox> {data?.fetchUseditem.price}원</PriceBox>
                <Name>
                  판매자명 :{"  "}
                  {data?.fetchUseditem.seller.name}
                </Name>
              </Col>
            </BasketItem>
          </ProductBox>
          <PaymentBox>
            <UserInfo>
              받는이 : ㄴㅇㄹㅁㄴㄹㅁㄹㅁㄴㅎㅁㅎㄹㅇ
              <br />
              배송지: ansgPalsd kdlfkjanglvfkdvklnskvmcklxmvmklaglkmvdvx,cnm
              <br />
              전화번호 : 01063363861
              <br />
            </UserInfo>
            <PaymentPriceBox>
              <PaymentTitle>내 포인트</PaymentTitle>
              <PaymentPrice>
                {userData?.fetchUserLoggedIn.userPoint.amount}
                {"   "}MP
              </PaymentPrice>
            </PaymentPriceBox>
            <PaymentPriceBox>
              <PaymentTitle>주문금액</PaymentTitle>
              <PaymentPrice>
                {data?.fetchUseditem.price}
                {"   "}MP
              </PaymentPrice>
            </PaymentPriceBox>
            <PaymentButton onClick={onClickPayment}>결제하기</PaymentButton>
          </PaymentBox>
        </Wrapper>
      </Back>
    </>
  );
}
