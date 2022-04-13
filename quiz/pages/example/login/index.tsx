import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";

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
    const result = await loginUser({
      variables: { email, password },
    });
    const accessToken = result.data?.loginUser.accessToken;
    console.log(accessToken);
    setAccessToken(accessToken || "");

    localStorage.setItem("accessToken", accessToken || "");
    alert("로그인에 성공하셨습니다.");
    router.push(`/example/main`);
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
