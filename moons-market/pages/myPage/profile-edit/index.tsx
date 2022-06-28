import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { checkValidationImage } from "../../../src/components/units/uploads01/Uploads01.validation";

export const BackGround = styled.div`
  width: 1200px;

  border: 10px solid #ffc772;

  border-radius: 15px;
  margin-top: 200px;
  margin-bottom: 100px;
`;
export const Wrapper = styled.div`
  padding: 100px 0px 0px 0px;
  height: 800px;

  width: 1200px;
  border-bottom: 1px solid #e8e7e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProfileBack = styled.div`
  margin-left: 200px;
  height: 300px;
  width: 300px;
  background-image: url("/circle.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileImageBox = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 150px;

  cursor: pointer;
`;
export const ProfileImage = styled.img`
  object-fit: cover;
  height: 200px;
  width: 200px;
  border-radius: 150px;
`;
export const RightBox = styled.div`
  margin-top: 100px;
  width: 600px;
  height: 100px;
  margin-left: 100px;
`;

export const Name = styled.input`
  font-size: 40px;
  width: 350px;
  padding-left: 20px;
  border-radius: 15px;
`;

export const Email = styled.div`
  font-size: 30px;
  color: #bdbdbd;
`;

export const Point = styled.div`
  font-size: 30px;
  color: #000000;
`;

export const EditButton = styled.button`
  background-color: #60d639;
  width: 300px;
  height: 100px;
  font-size: 30px;
  margin: 0px 10px;
  border-radius: 10px;
  font-weight: 500;
  color: white;
  border: none;
  cursor: pointer;
`;
export const NameErr = styled.div`
  color: red;
  font-size: 20px;
  margin-left: 20px;
  height: 20px;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
      picture
    }
  }
`;
const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export interface ImyUpdateUserInput {
  name?: string;
  picture?: string;
}
export interface ImyVariables {
  name?: string;
  picture?: string;
}
export default function ProfileEditPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN, { variables: {} });
  const router = useRouter();
  const [updateUser] = useMutation(UPDATE_USER);
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState<File | undefined>();

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangfile = (event) => {
    const file = checkValidationImage(event.target.files?.[0]);
    console.log(file);

    if (!file) {
      alert("파일이 없습니다.");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    // Blob 은 바이러니 라이오브젝트
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        setImgUrl(data.target?.result);
        setFile(file);
      }
    };
  };
  const onChangeName = (event) => {
    if (!event.target.value) {
      setNameErr("이름은 필수사항입니다.");
    }
    if (event.target.value) {
      setNameErr("");
      setName(event.target.value);
    }
  };
  const onClickExit = () => {
    router.push("/myPage");
  };

  const onClickEditButton = async () => {
    const myVariables: ImyVariables = {};
    const fileChange =
      imgUrl !==
      `https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`;
    if (fileChange) {
      const result = await uploadFile({ variables: { file } });
      console.log(result);
      myVariables.picture = String(result.data?.uploadFile.url);
    }
    if (data?.fetchUserLoggedIn.name !== name) {
      myVariables.name = name;
    }
    if (!fileChange && data?.fetchUserLoggedIn.name === name) {
      Modal.info({ content: "변경사항이없습니다!" });
    }
    try {
      await updateUser({
        variables: { updateUserInput: myVariables },
      });
      Modal.info({ content: "프로필이 수정되었습니다." });
      router.push(`/myPage`);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (data?.fetchUserLoggedIn.picture) {
      setImgUrl(
        `https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`
      );
    }
    setName(data?.fetchUserLoggedIn.name);
  }, [data]);
  return (
    <>
      <BackGround>
        <Wrapper>
          <Row>
            <ProfileBack>
              <ProfileImageBox onClick={onClickUpload}>
                {imgUrl.length ? (
                  <ProfileImage src={imgUrl} />
                ) : (
                  <ProfileImage src={"/noimg.png"} />
                )}
              </ProfileImageBox>
            </ProfileBack>
            <RightBox>
              <input
                style={{ display: "none" }}
                type="file"
                onChange={onChangfile}
                ref={fileRef}
              />
              <Name
                defaultValue={data?.fetchUserLoggedIn.name}
                onChange={onChangeName}
              ></Name>
              <NameErr>{nameErr}</NameErr>
              <Email>{data?.fetchUserLoggedIn.email}</Email>
              <Point>
                POINT :{" "}
                {data?.fetchUserLoggedIn.userPoint.amount
                  ? data?.fetchUserLoggedIn.userPoint.amount
                  : 0}{" "}
                MP
              </Point>
            </RightBox>
          </Row>
          <ButtonBox>
            <EditButton
              style={{ backgroundColor: "#bcbebc" }}
              onClick={onClickExit}
            >
              취소
            </EditButton>
            <EditButton
              style={{ backgroundColor: "#60d639" }}
              onClick={onClickEditButton}
            >
              수정완료
            </EditButton>
          </ButtonBox>
        </Wrapper>
      </BackGround>
    </>
  );
}
