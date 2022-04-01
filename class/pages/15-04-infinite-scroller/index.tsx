import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

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
  height: 700px;
  overflow: auto;
`;
const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const MyCal = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = () => {
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
    <Back>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
        // loader={<div className="loader" key={0}>Loading ...</div>}//로딩중이라고해줌
      >
        {data?.fetchBoards.map((el: any) => (
          <MyRow key={el._id}>
            <MyCal></MyCal>
            <MyCal>{el._id}</MyCal>
            <MyCal>{el.writer}</MyCal>
            <MyCal>{el.title}</MyCal>
          </MyRow>
        )) || <div>loading</div>}
      </InfiniteScroll>
    </Back>
  );
}
