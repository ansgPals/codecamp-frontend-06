import { gql, useQuery } from "@apollo/client";
import ScrollList from "../../src/day15/scroll";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Back = styled.div`
  height: 500px;
  overflow: auto;
`;

export default function ScrollPage() {
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
            <ScrollList key={el.id} el={el} />
          ))}
        </InfiniteScroll>
      </Back>
    </div>
  );
}
