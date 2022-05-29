import styled from "@emotion/styled";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 39px;
  background: #6400ff;
  margin-left: 5px;
  box-shadow: 0px 4px 10px rgba(100, 0, 255, 0.15);
  border-radius: 10px;
  cursor: pointer;
`;
const Up = styled(UpOutlined)`
  color: white;
  font-size: 20px;
`;
const Down = styled(DownOutlined)`
  color: white;
  font-size: 20px;
`;
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      title
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;
export default function PageMoveButton() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [searchWord, setSearchWord] = useState("");
  const [indexNumber, setIndexNumber] = useState<number>(0);
  const [numberOfPageData, setNumberOfPageData] = useState(0);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: pageNumber, search: searchWord },
  });
  const { data: fetchBoardsCount } = useQuery(FETCH_BOARDS_COUNT, {
    variables: { search: searchWord },
  });
  console.log(data?.fetchBoards);

  const [isClick, setIsClick] = useState(true);
  const router = useRouter();
  const nextIndex = Number(indexNumber) + 1 > 9 ? 0 : Number(indexNumber) + 1;
  const prevIndex = Number(indexNumber) - 1 < 0 ? 9 : Number(indexNumber) - 1;

  const boardCount = fetchBoardsCount?.fetchBoardsCount;

  const presentCount = pageNumber * 10 + indexNumber - 9;

  const nextId = data?.fetchBoards[Number(nextIndex)]?._id;
  const prevId = data?.fetchBoards[Number(prevIndex)]?._id;

  const onClickUp = () => {
    if (prevIndex !== 9) {
      router.push(`/0000/boards/${prevId}`);
      sessionStorage.setItem("indexNumber", JSON.stringify(prevIndex));
      setIsClick((prev) => !prev);
    } else if (prevIndex === 9 && pageNumber > 1) {
      refetch({ search: searchWord, page: pageNumber - 1 });
      router.push(`/0000/boards/${prevId}`);
      sessionStorage.setItem("indexNumber", JSON.stringify(prevIndex));
      sessionStorage.setItem("pageNumber", JSON.stringify(pageNumber - 1));
      setIsClick((prev) => !prev);
    } else if (prevIndex === 9 && pageNumber === 1) {
      Modal.info({ content: "이전자료가 더이상 존재하지않습니다." });
    }
  };
  const onClickDown = () => {
    if (boardCount === presentCount) {
      Modal.info({ content: "다음자료가 더이상 존재하지 않습니다." });
    } else if (nextIndex !== 0) {
      router.push(`/0000/boards/${nextId}`);
      sessionStorage.setItem("indexNumber", JSON.stringify(nextIndex));
      setIsClick((prev) => !prev);
    } else if (nextIndex === 0) {
      refetch({ search: searchWord, page: pageNumber + 1 });
      router.push(`/0000/boards/${nextId}`);
      sessionStorage.setItem(`indexNumber`, JSON.stringify(nextIndex));
      sessionStorage.setItem("pageNumber", JSON.stringify(pageNumber + 1));
      setIsClick((prev) => !prev);
    }
  };

  useEffect(() => {
    const indexNumber = JSON.parse(
      sessionStorage.getItem("indexNumber") || "0"
    );
    setIndexNumber(Number(indexNumber));
    const pageNumber = JSON.parse(sessionStorage.getItem("pageNumber") || "0");
    setPageNumber(Number(pageNumber));
    const searchWord = JSON.parse(sessionStorage.getItem("searchWord") || "");
    setSearchWord(searchWord);
    const numberOfPageData = JSON.parse(
      sessionStorage.getItem("numberOfPageData") || "0"
    );
    setNumberOfPageData(numberOfPageData);
  }, [isClick]);
  return (
    <Row>
      <Button onClick={onClickUp}>
        <Up></Up>
      </Button>
      <Button onClick={onClickDown}>
        <Down></Down>
      </Button>
    </Row>
  );
}
