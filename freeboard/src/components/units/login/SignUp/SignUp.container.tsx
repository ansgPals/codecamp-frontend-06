import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { async, createMockUserToken } from "@firebase/util";
import { prepareServerlessUrl } from "next/dist/server/base-server";
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
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [inputsErr, setInputsErr] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputs = { ...inputs, [event.target.id]: event.target.value };
    setInputs(newInputs);
    if (event.target.value)
      setInputsErr((prev) => ({ ...prev, [event.target.id]: "" }));
    const isActive = Object.values(newInputs).every((el) => el);
    setIsActive(isActive);
  };
  const onClickSignUp = async () => {
    setInputsErr({
      email: inputs.email ? "" : "이메일을 입력해주세요.",
      password: inputs.password ? "" : "비밀번호를 입력해주세요.",
      name: inputs.name ? "" : "이름을 입력해주세요.",
    });
    if (Object.values(inputs).every((el) => el)) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              ...inputs,
            },
          },
        });
        alert("회원가입을 환영합니다!!");
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
    />
  );
}
