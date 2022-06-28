import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import * as yup from "yup";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
  IUseditemQuestion,
} from "../../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../productCommentList.container";
import QuestionAnswerItems from "../../QuestionAnswerItem/QuestionAnswerItems";

export const ItemWrapper = styled.div`
  width: 50vw;
  min-width: 600px;
  margin: 0px 100px;
  padding-top: 20px;
  /* height: 128px; */
  border-bottom: 1px solid lightgray;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
`;

export const MainWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;
export const ContentsEdit = styled.input`
  border: 1px solid #bdbdbd;
  width: 39vw;
  /* max-width: 100px; */
`;
export const Row = styled.div`
  width: 46.5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const InputErr = styled.div`
  height: 20px;
  min-height: 20px;
  align-items: center;
  font-size: 14px;
  color: red;
`;
export const DateString = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 60px;
  color: #bdbdbd;
  border-bottom: 2px solid lightgray;
`;

export const EditOpenButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  width: 80px;
  font-size: 17px;
  line-height: 5px;
  color: #ababab;
  text-align: end;
  margin-right: 10px;
`;
interface IPropsInBox {
  isActive?: boolean;
}
export const EditButton = styled.button<IPropsInBox>`
  border: none;
  background-color: white;
  cursor: pointer;
  width: 80px;
  font-size: 17px;
  line-height: 5px;
  color: #ababab;
  text-align: end;
`;

export const CommentNum = styled.button`
  border: none;
  background-color: white;
  height: 30px;
  margin-left: 20px;
  width: 80px;
  font-size: 17px;
  color: #ababab;
  text-align: end;
`;
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
export const CreateRow = styled.div`
  margin-top: 20px;
  width: 50vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid #c7c7c7;
`;

export const InputBox = styled.input`
  width: 40vw;
  height: 38px;
  align-items: center;
  border-radius: 16px;
  font-size: 16px;
  padding: 0px 10px;
  border: 1px solid #c5edcd;
`;

export interface IButtons {
  isActive: boolean;
}
export const SignUpButton = styled.button`
  width: 120px;
  margin-left: 10px;
  height: 40px;
  align-items: center;
  border-radius: 16px;
  font-size: 20px;
  border: 1px solid #75b582;
  background-color: ${(props: IButtons) =>
    props.isActive ? "#ffffff" : "#e5e5e5"};
  /* color: ${(props: IButtons) => (props.isActive ? "white" : "black")}; */
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: #fffcec;
  }
`;
export const ItemBack = styled.div`
  cursor: pointer;
  :hover {
    background-color: #f9fff9;
  }
`;

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;
export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;
export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        _id
        name
        picture
      }
    }
  }
`;
export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      user {
        _id
        name
        picture
      }
      createdAt
    }
  }
`;
export interface ICommentListUIProps {
  el: IUseditemQuestion;
}
const schema = yup.object({
  contents: yup.string().required("댓글 내용은 필수 입력 사항입니다."),
});
interface IFormValues {
  contents?: string;
}
export default function ProductCommentListUIItem(props: ICommentListUIProps) {
  const [userInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">
  >(DELETE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);
  const { data: answerData } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: String(props.el._id),
    },
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickCommentDetail = () => {
    setIsDetail((prev) => !prev);
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };
  const onClickEditClose = () => {
    setIsEdit(false);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: String(props.el._id),
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
      Modal.info({ content: "질문이 삭제되었습니다!" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickEditSubmit = async (data: IFormValues) => {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: { contents: data.contents },
          useditemQuestionId: String(props.el._id),
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
      Modal.info({ content: "질문이 수정되었습니다!" });
      setIsEdit(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };
  const onClickCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };
  const onClickCreateAnswer = async (data: IFormValues) => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents: data.contents },
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.el._id,
            },
          },
        ],
      });
      Modal.info({ content: "답변이 등록되었습니다!" });
      setIsEdit(false);
      reset({ contents: "" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {isOpenDeleteModal && (
        <Modal
          // animation={false}
          visible={true}
          onOk={onClickDelete}
          onCancel={onClickCloseDeleteModal}
        >
          정말로 질문을 삭제하시겠습니까??
        </Modal>
      )}

      <ItemWrapper>
        <ItemBack onClick={onClickCommentDetail}>
          <FlexWrapper>
            <Avatar style={{ objectFit: "cover" }} src="/noimg.png" />
            <form onSubmit={handleSubmit(onClickEditSubmit)}>
              <Row>
                <MainWrapper>
                  <Contents>{props.el?.user.name}</Contents>

                  {isEdit ? (
                    <>
                      <ContentsEdit
                        defaultValue={props.el?.contents}
                        type="text"
                        {...register("contents")}
                      ></ContentsEdit>
                      <InputErr>{formState.errors.contents?.message}</InputErr>
                    </>
                  ) : (
                    <Contents>{props.el?.contents}</Contents>
                  )}
                </MainWrapper>
                <OptionWrapper>
                  {props.el.user._id === userInfo._id && (
                    <>
                      {isEdit ? (
                        <>
                          <EditButton isActive={formState.isValid}>
                            수정완료
                          </EditButton>
                          <DeleteIcon
                            src="/nono.png/"
                            onClick={onClickEditClose}
                          />
                        </>
                      ) : (
                        <>
                          <EditOpenButton onClick={onClickUpdate}>
                            수정
                          </EditOpenButton>
                          <DeleteIcon
                            src="/nono.png/"
                            onClick={onClickOpenDeleteModal}
                          />
                        </>
                      )}
                    </>
                  )}{" "}
                </OptionWrapper>
              </Row>
            </form>{" "}
          </FlexWrapper>{" "}
          <DateString>{props.el?.createdAt}</DateString>
        </ItemBack>
        {isDetail && (
          <>
            {answerData?.fetchUseditemQuestionAnswers.map((el: any) => (
              <QuestionAnswerItems
                key={el._id}
                el={el}
                questionId={props.el._id}
              />
            ))}
            <form onSubmit={handleSubmit(onClickCreateAnswer)}>
              <CreateRow>
                <Col>
                  {/* <SubTitle>내용</SubTitle> */}
                  <InputBox
                    placeholder="댓글로 질문을 입력해주세요."
                    type="text"
                    {...register("contents")}
                  ></InputBox>
                  <InputErr>{formState.errors.contents?.message}</InputErr>{" "}
                </Col>{" "}
                <SignUpButton isActive={formState.isValid}>
                  답변등록
                </SignUpButton>
              </CreateRow>
            </form>{" "}
          </>
        )}{" "}
        <CommentNum>
          답변{" "}
          {answerData?.fetchUseditemQuestionAnswers
            ? answerData?.fetchUseditemQuestionAnswers.length
            : 0}
          개
        </CommentNum>
      </ItemWrapper>
    </>
  );
}
