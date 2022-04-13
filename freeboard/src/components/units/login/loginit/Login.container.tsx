import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import LogInPresenter from "./Login.presenter";

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LogInContainer() {
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeMailInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!/^\w+\@\w+\.\w+$/.test(event.target.value)) {
      setEmailErr("이메일형식을 확인하세요!!");
    } else {
      setEmail(event.target.value);
      setEmailErr("");
    }

    if (event.target.value && password) {
      setPassErr("");
      setIsActive(true);
    }
  };

  const onChangePassInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value && password) {
      setIsActive(true);
    }
  };

  const onClickLogin = async () => {
    if (!password) setPassErr("비밀번호를 입력하세요!");

    if (email && password && !emailErr) {
      try {
        const result = await loginUser({
          variables: {
            email,
            password,
          },
        });
        const accessToken = result.data?.loginUser.accessToken;
        setAccessToken(accessToken || "");

        alert("어서오세요 집사님!!");
        router.push(`/boards`);
      } catch (error: any) {
        console.log(error);
        alert(error.message);
      }
    }
  };
  const onClickSignUp = () => {
    router.push(`/login/SignUp`);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <LogInPresenter
      inputRef={inputRef}
      onChangeMailInput={onChangeMailInput}
      onChangePassInput={onChangePassInput}
      onClickLogin={onClickLogin}
      emailErr={emailErr}
      isActive={isActive}
      onClickSignUp={onClickSignUp}
      passErr={passErr}
    />
  );
}
