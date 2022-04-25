import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { Modal } from "antd";

export const Back = styled.div`
  padding: 100px;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackGround = styled.div`
  /* box-shadow: 0px 10px 50px #d6ffe2; */
  /* padding: 50px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
export const Goangsss = styled.div`
  font-size: 70px;
  color: #d6ffe2;
  height: 80px;
  width: 1920px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
  font-style: italic;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28px;
  height: 60px;
  font-weight: bolder;
`;
export const JustBox = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;
export const SubTitle = styled.div`
  padding: 0px 10px;
  width: 384px;
  height: 25px;
  align-items: center;
  font-size: 16px;
`;
export const InputBox = styled.input`
  width: 384px;
  height: 64px;
  align-items: center;
  border-radius: 16px;
  font-size: 16px;
  padding: 0px 10px;
  border: #d6ffe2 12px solid;
`;
export const InputErr = styled.div`
  padding: 0px 10px;
  width: 384px;
  height: 20px;
  min-height: 20px;
  align-items: center;
  font-size: 14px;
  color: red;
`;
export const SignUpButton = styled.button`
  width: 384px;
  height: 64px;
  align-items: center;
  border-radius: 16px;
  font-size: 20px;
  padding: 0px 10px;
  border: 1px solid #4c6b52;
  background-color: ${(props: IButtons) =>
    props.isActive ? "#23b841" : "#4c6b52"};
  color: ${(props: IButtons) => (props.isActive ? "white" : "black")};
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: ${(props: IButtons) =>
      props.isActive ? "#22cf4d" : "#4c6b52"};
  }
`;
export const FooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 384px;
  height: 64px;
`;

export const FooterButton = styled.button`
  cursor: pointer;
  width: 120px;
  background-color: white;
  border: none;
  font-size: 16px;
  :hover {
    color: #4c6b52;
  }
`;

export const FooterButton2 = styled.button`
  cursor: pointer;
  width: 120px;
  background-color: white;
  border-top: none;
  border-bottom: none;
  font-size: 16px;
  :hover {
    color: #4c6b52;
  }
`;
export interface IButtons {
  isActive: boolean;
}

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수입력사합니다.")
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요"),
});

interface IFormValues {
  email?: string;
  password?: string;
}

export default function LogInPresenter() {
  const [basketItems, setBasketItems] = useState([]);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    // setIsOpen(false);
    router.push(`/quiz06/basket`);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickSubmit = async (data: IFormValues) => {
    console.log(data);
    if (formState.isValid) {
      try {
        const result = await loginUser({
          variables: {
            email: data.email,
            password: data.password,
          },
        });
        const accessToken = result.data?.loginUser.accessToken;
        setAccessToken(accessToken || "");
        localStorage.setItem("accessToken", accessToken || "");
        console.log(accessToken);
        alert("어서오세요!!");
        router.push(`/quiz07/login-success`);
      } catch (error: any) {
        console.log(error);
        alert(error.message);
      }
    }
  };

  const onClickSignUp = () => {
    router.push(`/quiz07/login-success`);
  };

  return (
    <>
      <BackGround>
        <Back>
          <Goangsss> MOONSMARKET</Goangsss>
          <Title>로그인</Title>
          <form onSubmit={handleSubmit(onClickSubmit)}>
            <JustBox>
              <SubTitle>이메일</SubTitle>
              <InputBox
                placeholder="이메일을 입력해주세요."
                type="text"
                ref={inputRef}
                {...register("email")}
              ></InputBox>
              <InputErr>{formState.errors.email?.message}</InputErr>
            </JustBox>
            <JustBox>
              <SubTitle>비밀번호</SubTitle>
              <InputBox
                placeholder="비밀번호를 입력해주세요."
                type="password"
                {...register("password")}
              ></InputBox>
              <InputErr>{formState.errors.password?.message}</InputErr>
            </JustBox>
            <SignUpButton isActive={formState.isValid}>로그인</SignUpButton>
          </form>
          <FooterBox>
            <FooterButton>이메일찾기</FooterButton>
            <FooterButton2>비밀번호찾기</FooterButton2>
            <FooterButton onClick={onClickSignUp}>회원가입</FooterButton>
          </FooterBox>
        </Back>
      </BackGround>
    </>
  );
}
