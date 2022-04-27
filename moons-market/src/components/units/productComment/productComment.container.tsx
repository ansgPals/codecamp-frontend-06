import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FETCH_USED_ITEM_QUESTIONS } from "./productCommentList.container";
export const Back = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Row = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid #c7c7c7;
  padding-bottom: 20px;
`;

// export const SubTitle = styled.div`
//   padding: 0px 10px;
//   width: 384px;
//   height: 25px;
//   align-items: center;
//   font-size: 16px;
// `;
export const InputBox = styled.input`
  width: 40vw;
  height: 64px;
  align-items: center;
  border-radius: 16px;
  font-size: 16px;
  padding: 0px 10px;
  border: #d6ffe2 12px solid;
`;
export const InputErr = styled.div`
  padding: 0px 30px;
  width: 40vw;
  height: 20px;
  min-height: 20px;
  align-items: center;
  font-size: 14px;
  color: red;
`;
export interface IButtons {
  isActive: boolean;
}
export const SignUpButton = styled.button`
  width: 120px;
  margin-left: 10px;
  height: 64px;
  align-items: center;
  border-radius: 16px;
  font-size: 20px;
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

const schema = yup.object({
  contents: yup.string().required("댓글 내용은 필수 입력 사항입니다."),
});

interface IFormValues {
  contents?: string;
}
export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

export default function ProductCommentPage() {
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const router = useRouter();

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = async (data: IFormValues) => {
    console.log(data);
    if (formState.isValid) {
      try {
        const result = await createUseditemQuestion({
          variables: {
            createUseditemQuestionInput: {
              contents: data.contents,
            },
            useditemId: router.query.productId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: {
                useditemId: String(router.query.productId),
              },
            },
          ],
        });

        console.log(result);
        reset();
      } catch (error: any) {
        console.log(error);
        alert(error.message);
      }
    }
  };

  return (
    // <BackGround>
    <Back>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <Row>
          <Col>
            {/* <SubTitle>내용</SubTitle> */}
            <InputBox
              placeholder="댓글로 질문을 입력해주세요."
              type="text"
              {...register("contents")}
            ></InputBox>
            <InputErr>{formState.errors.contents?.message}</InputErr>
          </Col>
          <SignUpButton isActive={formState.isValid}>질문등록</SignUpButton>
        </Row>
      </form>
    </Back>
    // {/* </BackGround> */}
  );
}
