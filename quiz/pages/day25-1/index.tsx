import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import Button01 from "../../src/day23/buttons/button01";
import Input01 from "../../src/day23/inputs/input01";

// 무한스크롤페이지에서는 요렇게 해준다~ 왜냐 리페치해서 10개 맞출 필요 없으니깐! 큰 서비스일 수록 아래와같이 서버비용줄일려고 노력해야햄..
const Back = styled.div`
  background-color: #f5e5ff;
`;
const Cal = styled.div`
  display: flex;
  flex-direction: row;
`;
const Row = styled.div`
  text-align: center;
  font-size: 20px;
  width: 200px;
  margin: 0px 15px;
`;
const MyButton = styled.button`
  font-size: 18px;
  width: 150px;
  background-color: #d7acff;
`;
const Error = styled.div`
  color: red;
  font-size: 19px;
`;
interface IFormValues {
  name?: string;
  password?: string;
  title?: string;
  contents?: string;
}

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
const schema = yup.object({
  name: yup
    .string()
    .max(5, "이름을 5글자이내로작정해주세요")
    .required("이름은 필수 입력 사항입니다."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{1,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다."
    )
    .max(8, "비밀번호는 최대 8자리로 입력해주세요")

    .required("비밀번호는 필수입력사합니다."),
  title: yup
    .string()
    .max(100, "100자이내로 작성해주세요")
    .required("제목은 필수 입력 사항입니다."),
  contents: yup
    .string()
    .max(1000, "1000자이내로 작성해주세요")
    .required("내용은 필수 입력 사항입니다."),
});

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;

        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // prev 안에 기존 30개 데이터가 존재 => 29개로 변경해야 함
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId // el._id가 안되므로 readField 사용
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };
  // 캐쉬에서 el._id가 안되므오, readfield 도구를 사용해서 꺼내오기~
  const onClickSubmit = async (data: IFormValues) => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: data.name,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <Back>
      {data?.fetchBoards.map((el) => (
        <Cal key={el._id}>
          <Row>{el.writer}</Row>
          <Row>{el.title}</Row>
          <Row>{el.contents}</Row>
          <MyButton onClick={onClickDelete(el._id)}>X</MyButton>
        </Cal>
      ))}
      <Cal>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          작성자: <Input01 type="text" register={register("name")} />
          <Error>{formState.errors.name?.message}</Error>
          <br />
          비밀번호: <Input01 type="password" register={register("password")} />
          <Error>{formState.errors.password?.message}</Error>
          <br />
          제목: <Input01 type="text" register={register("title")} />
          <Error>{formState.errors.title?.message}</Error>
          <br />
          내용: <Input01 type="text" register={register("contents")} />
          <Error>{formState.errors.contents?.message}</Error>
          <Button01 isActive={formState.isValid} title="게시물등록하기" />
        </form>
      </Cal>
    </Back>
  );
}
