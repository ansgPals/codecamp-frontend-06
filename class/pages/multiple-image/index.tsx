import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileManyArgs,
} from "../../../../../commons/types/generated/types";
import GrayBoxComponent from "../../../../commons/graybox/graybox";
import HeaderTitle from "../../../../commons/headerTitle/headerTitle";
import ImageBox from "../../../../commons/image/imageBox";
import { wrapperStyle } from "../../../../commons/image/imageSize";
import ImageText from "../../../../commons/image/imageText";
import TextInput from "../../../../commons/inputs/TextInput";
import Toggle from "../../../../commons/toggle/toggle";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1552px;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 15px 33px rgba(0, 0, 0, 0.03);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
`;
export const Span = styled.span`
  font-family: "SUIT700";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
`;
export const InnerBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 716px;
  /* height: 29px; */
`;
export const ToggleTitle = styled.div`
  margin-right: 96px;
`;
export const WidthBox = styled.div`
  width: 603px;
`;
export const Subtitle = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #2b2b2b;
`;
export const ImageBoxs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const FileInput = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  width: 62px;
  height: 21px;
  background: #c4c4c4;
  border-radius: 5px;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  border: none;
`;
const PositionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const PositionColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const ErrorMessage = styled.div`
  margin-left: 10px;
  color: red;
`;
export const UPLOAD_FILE_MANY = gql`
  mutation uploadFileMany($files: [Upload!]!) {
    uploadFileMany(files: $files)
  }
`;

export default function BannerWriteContainer({
  isEdit,
  data,
}: {
  isEdit: boolean;
  data?: any;
}) {
  const detailRef = useRef(null);
  const thumbnailRef = useRef(null);
  const [thumbnailImage, setThumbnailImage] = useState([]);
  const [uploadFile, setUploadFile] = useState([]);
  const [, setUploadFileName] = useState([""]);
  const [toggle, setToggle] = useState(true);

  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };

  const [uploadFileMany] = useMutation<
    Pick<IMutation, "uploadFileMany">,
    IMutationUploadFileManyArgs
  >(UPLOAD_FILE_MANY);

  const onChangeFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    const files = e.target.files;
    const newFiles = Object.values(files);
    console.log(newFiles);
    if (e.target.name === "detail") {
      const detailFile = [...uploadFile, ...newFiles];
      setUploadFile(detailFile);
      console.log(detailFile);
      try {
        const result = await uploadFileMany({
          variables: { files: detailFile },
        });
        console.log("cc");
        console.log("bbb", result);

        setUploadFileName(result.data.uploadFileMany);
      } catch (error) {
        console.error(error);
        Modal.error({ content: error.message });
      }
    }
    if (e.target.name === "thumbnail") {
      const thumbnailFile = [...newFiles];
      console.log(thumbnailFile);
      try {
        const result = await uploadFileMany({
          variables: { files: thumbnailFile },
        });
        console.log("cc");
        console.log("bbb", result);
        setThumbnailImage(result.data.uploadFileMany);
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };
  const onClickImageInput = (e: MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).name === "detail"
      ? detailRef.current.click()
      : thumbnailRef.current.click();
  };

  return (
    <>
      <HeaderTitle title={["매인 배너", "배너 등록"]} />
      <Wrapper style={{ padding: "30px 30px 0px 30px" }}>
        <Span>기본 설정</Span>
        <PositionRow style={{ marginTop: "20px" }}>
          <Subtitle style={{ marginRight: "57px" }}>배너제목</Subtitle>
          <TextInput
            placeholder="배너 제목을 작성해주세요 :)"
            wrapperStyles={{ width: "603px", marginRight: "60px" }}
          />

          <Subtitle style={{ marginRight: "96px" }}>사용</Subtitle>
          <div onClick={onClickToggle}>
            <Toggle toggle={toggle}></Toggle>
          </div>
        </PositionRow>
        <PositionRow
          style={{
            alignItems: "flex-start",
            height: "60px",
            marginTop: "10px",
          }}
        >
          <Subtitle style={{ marginRight: "57px", marginTop: "5px" }}>
            배너내용
          </Subtitle>
          <TextInput
            placeholder="배너 내용을 작성해주세요 :)"
            wrapperStyles={{ width: "603px", marginRight: "60px" }}
          />{" "}
          <Subtitle style={{ marginRight: "86px", marginTop: "5px" }}>
            순서
          </Subtitle>
          <PositionColumn>
            <TextInput
              placeholder="숫자가 높을 수로 먼저 출력됩니다."
              wrapperStyles={{ width: "603px" }}
            />
            <ErrorMessage>숫자만 입력 가능합니다!</ErrorMessage>
          </PositionColumn>
        </PositionRow>
      </Wrapper>
      <Wrapper>
        <Span>상세 설정</Span>
        <InnerBox>
          <Subtitle>배너 이미지</Subtitle>
          <WidthBox>
            <ImageBoxs>
              <ImageBox
                url={thumbnailImage[0]}
                wrapperStyleType={wrapperStyle.course}
              />
              <input
                type="file"
                name="thumbnail"
                style={{ display: "none" }}
                ref={thumbnailRef}
                onChange={onChangeFileUpload}
              />
              <FileInput
                style={{ margin: "0 10px" }}
                name="thumbnail"
                type="button"
                onClick={onClickImageInput}
              >
                파일선택
              </FileInput>
              <ImageText url={thumbnailImage[0]} />
            </ImageBoxs>
          </WidthBox>
        </InnerBox>
        <PositionRow>
          <GrayBoxComponent
            title="링크주소"
            text={"000000"}
            wrapperStyles={{ marginBottom: "15px", marginRight: "60px" }}
            half
          />{" "}
        </PositionRow>
      </Wrapper>
    </>
  );
}
