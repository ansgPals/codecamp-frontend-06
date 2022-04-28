import DOMPurify from "dompurify";
import { Button, Modal } from "antd";
import * as S from "../productDetail/productDetail.styles";
import { getDate } from "../libraries/util";
import { IProductDeatilUIProps } from "./productDetail.types";

export default function ProductDetailUI(props: IProductDeatilUIProps) {
  return (
    <>
      <Modal
        title="장바구니"
        visible={props.basketModalIsOpen}
        onOk={props.BasketOk}
        onCancel={props.BasketCancle}
        footer={[
          <>
            <Button onClick={props.BasketOk}>장바구니로</Button>
            <Button type="primary" onClick={props.BasketCancle}>
              더 볼게요
            </Button>
          </>,
        ]}
      >
        <p>장바구니에 담겼습니다! 장바구니로 이동하시겠습니까?</p>
      </Modal>
      <Modal
        title="상품을 지우시겠습니까?"
        visible={props.deleteIsOpen}
        onOk={props.DeletetOk}
        onCancel={props.DeleteCancle}
        footer={[
          <>
            <Button onClick={props.DeletetOk}>상품삭제</Button>
            <Button type="primary" onClick={props.DeleteCancle}>
              안지울래요~
            </Button>
          </>,
        ]}
      >
        <p>장바구니에 담겼습니다! 장바구니로 이동하시겠습니까?</p>
      </Modal>
      <S.Back>
        <S.BackGround>
          <S.Left>
            <S.LeftBody>
              {props.data?.fetchUseditem.images[0] ? (
                <S.IMG
                  style={{ objectFit: "cover" }}
                  src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
                />
              ) : (
                <S.IMG style={{ objectFit: "cover" }} src={"/사진없음.png"} />
              )}
            </S.LeftBody>{" "}
            <S.TagBox>
              {props.data?.fetchUseditem.tags.map((el, idx) => (
                <S.Tag key={idx}>{el}</S.Tag>
              ))}
            </S.TagBox>
          </S.Left>
          <></>
          <S.RightBody>
            <S.ResponseDataBox>
              <S.TopBack>
                <S.TopLeft>
                  <S.ProFilePhoto></S.ProFilePhoto>
                  <S.NameDate>
                    <S.Name>{props.data?.fetchUseditem.seller.name}</S.Name>
                    <S.Date>
                      {getDate(props.data?.fetchUseditem?.createdAt)}
                    </S.Date>
                  </S.NameDate>
                </S.TopLeft>
              </S.TopBack>
              <S.TitleBox>{props.data?.fetchUseditem.name}</S.TitleBox>
              <S.RemarkBox>{props.data?.fetchUseditem.remarks}</S.RemarkBox>
            </S.ResponseDataBox>

            {props.pickIdArr.includes(props.data?.fetchUseditem._id) ? (
              <S.PriceBox>
                판매가 {props.data?.fetchUseditem.price}원{" "}
                <S.HeartIcon onClick={props.onClickPick}>
                  {props.data?.fetchUseditem?.pickedCount}
                </S.HeartIcon>
              </S.PriceBox>
            ) : (
              <S.PriceBox>
                판매가 {props.data?.fetchUseditem.price}원{" "}
                <S.NoHeartIcon onClick={props.onClickPick}>
                  {props.data?.fetchUseditem?.pickedCount}
                </S.NoHeartIcon>
              </S.PriceBox>
            )}

            <S.ProductButtonBox>
              {props.userInfo._id === props.data?.fetchUseditem.seller._id ? (
                <>
                  <S.MyButton onClick={props.OnClickDelete}>
                    삭제하기
                  </S.MyButton>
                  <S.MyButton onClick={props.OnClickEdit}>수정하기</S.MyButton>{" "}
                </>
              ) : (
                <>
                  <S.MyButton onClick={props.OnClickList}>목록으로</S.MyButton>
                  <S.MyButton onClick={props.OnClickPayment}>
                    구매하기
                  </S.MyButton>
                  <S.MyButton
                    onClick={props.OnClickBasket(props.data?.fetchUseditem)}
                  >
                    장바구니
                  </S.MyButton>
                </>
              )}
            </S.ProductButtonBox>
          </S.RightBody>
        </S.BackGround>
        <S.DetailBox>
          <S.DetailTitle>제품상세</S.DetailTitle>
          <S.ImageBox>
            {props.data?.fetchUseditem.images
              ?.filter((el: any) => el)
              .map((el: any) => (
                <S.IMG key={el} src={`https://storage.googleapis.com/${el}`} />
              ))}
          </S.ImageBox>
          {typeof window !== "undefined" ? (
            <S.ProductDetailBox
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            />
          ) : (
            <S.ProductDetailBox></S.ProductDetailBox>
          )}
          {props.data?.fetchUseditem.useditemAddress?.address?.[0] && (
            <>
              <S.DetailTitle>희망판매위치</S.DetailTitle>
              <div
                id="map"
                style={{
                  width: "800px",
                  height: "400px",
                  marginTop: "20px",
                  borderRadius: "15px",
                  marginLeft: "30px",
                }}
              ></div>
            </>
          )}
        </S.DetailBox>
      </S.Back>
    </>
  );
}
