import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";
import ListItem from "./ListItem/ListItem";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const Back = styled.div`
  height: 500px;
  overflow: auto;
`;

export default function BoardList() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  console.log(data);

  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div>
      <Back>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchBoards.map((el) => (
            <ListItem key={el.id} el={el} />
          ))}
        </InfiniteScroll>
      </Back>
    </div>
  );
}
