import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { async, createMockUserToken } from "@firebase/util";
import { prepareServerlessUrl } from "next/dist/server/base-server";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import SignUpPresenter from "./SignUp.presenter";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export default function SignUpContainer() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [passOk, setPassOk] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [inputsErr, setInputsErr] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
  });
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangePasswordOk = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== inputs.password) {
      setInputsErr((prev) => ({
        ...prev,
        password2: "입력하신비밀번호와 다릅니다!",
      }));
    }
    setPassOk(event.target.value);
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    if (
      event.target.id === "email" &&
      !/^\w+\@\w+\.\w+$/.test(event.target.value)
    ) {
      setInputsErr((prev) => ({
        ...prev,
        email: "이메일형식을 확인하세요!!",
      }));
      return;
    }

    if (
      event.target.id === "password2" &&
      event.target.value !== inputs.password
    ) {
      setInputsErr((prev) => ({
        ...prev,
        password2: "입력하신비밀번호와 다릅니다!",
      }));
      return;
    }

    if (event.target.value)
      setInputsErr((prev) => ({ ...prev, [event.target.id]: "" }));

    const newInputs = { ...inputs };
    if (event.target.id !== "password2") {
      const newInputs = { ...inputs, [event.target.id]: event.target.value };
      setInputs(newInputs);
    }
    const isActive = Object.values(newInputs).every((el) => el);
    setIsActive(isActive);
  };

  const onClickSignUp = async () => {
    setInputsErr((prev) => ({
      ...prev,
      email: inputs.email ? "" : "이메일을 입력해주세요.",
      password: inputs.password ? "" : "비밀번호를 입력해주세요.",
      // password2:
      //   inputs.password === passOk ? "" : "입력하신비밀번호와 다릅니다!",
      name: inputs.name ? "" : "이름을 입력해주세요.",
    }));
    if (inputsErr.password2) alert("비밀번호를 확인하세요!");
    if (Object.values(inputs).every((el) => el) && !inputsErr.password2) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              ...inputs,
            },
          },
        });
        alert("회원가입을 환영합니다!! 한번더 로그인해주세요!");
        router.push(`/login`);
      } catch (error: any) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <SignUpPresenter
      inputRef={inputRef}
      onChangeInputs={onChangeInputs}
      onClickSignUp={onClickSignUp}
      inputsErr={inputsErr}
      isActive={isActive}
      onChangePasswordOk={onChangePasswordOk}
    />
  );
}
