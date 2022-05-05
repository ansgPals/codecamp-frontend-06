import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import * as yup from "yup";
import {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../ProductCommentList/CommentListItem/productCommentListItems";

// export const ItemWrapper = styled.div`
//   width: 50vw;
//   min-width: 600px;
//   margin: 0px 100px;
//   padding-top: 20px;
//   /* height: 128px; */
//   border-bottom: 1px solid lightgray;
// `;

export const FlexWrapper = styled.div`
  width: fit-content;
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
  width: 43vw;
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
  margin-bottom: 10px;
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
export const EditButton = styled.button`
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
  width: 50vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid #c7c7c7;
  padding-bottom: 20px;
`;

export const InputBox = styled.input`
  width: 40vw;
  height: 40px;
  align-items: center;
  border-radius: 16px;
  font-size: 16px;
  padding: 0px 10px;
  border: #558a65 2px solid;
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
    props.isActive ? "#23b841" : "#75b582"};
  color: ${(props: IButtons) => (props.isActive ? "white" : "black")};
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: ${(props: IButtons) =>
      props.isActive ? "#22cf4d" : "#80ee96"};
  }
`;

export const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;
export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
    }
  }
`;

export interface ICommentListUIProps {
  el: IUseditemQuestion;
  questionId: string;
}
const schema = yup.object({
  contents: yup.string().required("댓글 내용은 필수 입력 사항입니다."),
});
interface IFormValues {
  contents?: string;
}
export default function QuestionAnswerItems(props: ICommentListUIProps) {
  const [userInfo] = useRecoilState(userInfoState);
  // const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  // const [isDetail, setIsDetail] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickUpdate = () => {
    setIsEdit(true);
  };
  const onClickEditClose = () => {
    setIsEdit(false);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(props.el._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.questionId,
            },
          },
        ],
      });
      Modal.info({ content: "답변이 삭제되었습니다!" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickEditSubmit = async (data: IFormValues) => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents: data.contents },
          useditemQuestionAnswerId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.questionId,
            },
          },
        ],
      });
      Modal.info({ content: "답변이 수정되었습니다!" });
      setIsEdit(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
      console.log(error);
    }
  };
  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };
  const onClickCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <Modal
          visible={true}
          onOk={onClickDelete}
          onCancel={onClickCloseDeleteModal}
        >
          정말로 질문을 삭제하시겠습니까??
        </Modal>
      )}
      {/* <ItemWrapper> */}
      <FlexWrapper>
        <Avatar style={{ objectFit: "cover" }} src="/초록화살.png" />
        <Avatar style={{ objectFit: "cover" }} src="/사진없음.png" />
        <form onSubmit={handleSubmit(onClickEditSubmit)}>
          <Row>
            <MainWrapper>
              <Contents>{props.el?.user.name}</Contents>

              {isEdit ? (
                <>
                  <ContentsEdit
                    type="text"
                    {...register("contents")}
                    defaultValue={props.el?.contents}
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
                      <DeleteIcon src="/엑스.png/" onClick={onClickEditClose} />
                    </>
                  ) : (
                    <>
                      <EditOpenButton onClick={onClickUpdate}>
                        수정
                      </EditOpenButton>
                      <DeleteIcon
                        src="/엑스.png/"
                        onClick={onClickOpenDeleteModal}
                      />
                    </>
                  )}
                </>
              )}
            </OptionWrapper>
          </Row>
        </form>
      </FlexWrapper>
      <DateString>{props.el?.createdAt}</DateString> {/* <Back> */}
    </>
  );
}
