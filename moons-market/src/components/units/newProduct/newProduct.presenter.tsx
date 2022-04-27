import * as S from "../newProduct/newProduct.styles";
import Uploads01 from "../uploads01/Uploads01.container";
import { v4 as uuid } from "uuid";

import { INewProductUIProps } from "./newProduct.type";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function NewProductUI(props: INewProductUIProps) {
  return (
    <S.BackGround>
      <form
        onSubmit={props.handleSubmit(props.isEdit ? props.EditOk : props.PutOk)}
      >
        <S.MyBody>
          <S.TitleBox>
            <S.TopLt>
              <S.MyName>상품명</S.MyName>
              <S.PutName
                type="text"
                {...props.register("name")}
                placeholder="판매하실물건의 이름을 적어주세요."
                maxLength={30}
                defaultValue={props.data?.fetchUseditem.name}
              />
              <S.MyErr>{props.formState.errors.name?.message}</S.MyErr>
            </S.TopLt>
            <S.TopRt>
              <S.MyName>상품요지</S.MyName>
              <S.PutPass
                type="text"
                {...props.register("remarks")}
                defaultValue={props.data?.fetchUseditem.remarks}
                placeholder="판매하실물건의 포인트를 적어주세요."
                maxLength={30}
              />
              <S.MyErr>{props.formState.errors.remark?.message}</S.MyErr>
            </S.TopRt>
            <S.MyName>희망판매가격</S.MyName>
            <S.PutTitle
              placeholder="희망판매가격을 작성해주세요.숫자만 작성가능합니다."
              type="number"
              {...props.register("price")}
              defaultValue={props.data?.fetchUseditem.price}
            />
            <S.MyErr>{props.formState.errors.price?.message}</S.MyErr>
          </S.TitleBox>
          <S.TextBox>
            <S.MyName>내용</S.MyName>
            <S.Editor
              onChange={props.onChangeContents}
              placeholder="판매하실 상품의 상세설명을 입력해주세요."
              value={props.getValues("contents") || ""}
            />
            <S.MyErr>{props.formState.errors.contents?.message}</S.MyErr>
          </S.TextBox>
          <S.PhotoBox>
            <S.MyName>사진첨부</S.MyName>
            <S.GrayBoxBox>
              {props.fileUrls.map((el, index) => (
                <Uploads01
                  key={uuid()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </S.GrayBoxBox>
          </S.PhotoBox>

          <S.AddBox>
            <S.MyName>희망판매위치</S.MyName>
            <div
              id="map"
              style={{
                width: "600px",
                height: "400px",
                marginTop: "20px",
                borderRadius: "15px",
              }}
            ></div>
            <S.Col>
              <S.SurchPush type="button" onClick={props.onClickPostNumber}>
                주소검색
              </S.SurchPush>
              <S.PutAdd>{props.add}</S.PutAdd>
            </S.Col>
            <S.PutAddDetail
              placeholder="상세희망판매위치을 작성해주세요."
              type="text"
              {...props.register("addressDetail")}
              defaultValue={
                props.data?.fetchUseditem.useditemAddress.addressDetail
              }
            />
            <S.MyErr>{props.formState.errors.addressDetail?.message}</S.MyErr>
          </S.AddBox>
          <S.InBox isActive={props.formState.isValid}>
            {props.isEdit ? "수정" : "등록"}하기
          </S.InBox>
        </S.MyBody>
      </form>

      {props.modalOpen && (
        <Modal
          visible={true}
          onOk={props.onModalOpen}
          onCancel={props.onModalOpen}
        >
          <DaumPostcode onComplete={props.clickPostNumber} />
        </Modal>
      )}
    </S.BackGround>
  );
}
