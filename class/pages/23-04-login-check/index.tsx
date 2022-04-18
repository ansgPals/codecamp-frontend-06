import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";
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

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

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

    // 3. 글로벌스테이트에 저장하기
    setAccessToken(accessToken || "");
    localStorage.setItem("accessToken", accessToken || "");

    // 4. 로그인성공페이지로 이동하기
    alert("로그인에 성공하셨습니다.");
    router.push(`/23-05-login-check-success`);
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
