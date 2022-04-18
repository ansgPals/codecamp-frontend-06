import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";

const LOGIN_USER = gql`
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
    }
  }
`;
export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const client = useApolloClient();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    // 1. 로그인 하기
    const result = await loginUser({
      variables: { email, password },
    });
    const accessToken = result.data?.loginUser.accessToken;
    console.log(accessToken);

    // 2. 유저정보 받아오기(유즈쿼리썼을때는 정보주면 받아오기가 자동이었움)
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
    console.log(userInfo);
    setUserInfo(userInfo);

    // 3. 글로벌스테이트에 저장하기
    setAccessToken(accessToken || "");
    localStorage.setItem("accessToken", accessToken || "");
    localStorage.setItem("useInfo", JSON.stringify(userInfo) || "");
    // 로컬스토리지는 객체가 못들어감 그래서 문자열형태로 넣어줘야힘
    // 새로고침했을때 안날라가게 아폴로설정에있는 유즈이팩트토 만져줌

    // 4. 로그인성공페이지로 이동하기
    alert("로그인에 성공하셨습니다.");
    router.push(`/24-02-login-use-aplolloclient-success`);
  };
  return (
    <>
      <div>
        <input type="text" onChange={onChangeEmail}></input>
        <br />
        <input type="password" onChange={onChangePassWord}></input>
        <br />
        <button onClick={onClickLogin}>로그인하기!</button>
      </div>
    </>
  );
}
