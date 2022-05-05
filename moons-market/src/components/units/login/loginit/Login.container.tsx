import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import LogInPresenter from "./Login.presenter";
import { IFormValues } from "./Login.types";

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      _id
      userPoint {
        amount
      }
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


export default function LogInContainer() {
  const [, setUserInfo] = useRecoilState(userInfoState);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const client = useApolloClient();
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

        const resultUserInfo = await client.query({
          query: FETCH_USER_LOGGED_IN,
          context: {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
          // 특정 http 요청보낼때 헤더/옵션
        });
        const userInfo = resultUserInfo.data.fetchUserLoggedIn;
        setUserInfo(userInfo);
        localStorage.setItem("userInfo", JSON.stringify(userInfo) || "");

        alert("어서오세요!!");
        router.push(`/usedItem`);
      } catch (error: any) {
        console.log(error);
        alert(error.message);
      }
    }
  };

  const onClickSignUp = () => {
    router.push(`/login/usedItem`);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <LogInPresenter
      inputRef={inputRef}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onClickSignUp={onClickSignUp}
    />
  );
}
