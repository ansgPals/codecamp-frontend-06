import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../commons/types/generated/types";
import ProductCommentListUIItem from "./productCommentListItems";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
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
const Back = styled.div`
  margin-bottom: 100px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const NoData = styled.div`
  margin-top: 30px;
  font-size: 30px;
  color: #ffc183;
  font-weight: 900;
`;

export default function ProductCommentListPage() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.productId) },
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <Back>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {!data?.fetchUseditemQuestions.length && (
          <NoData>
            등록된 질문이 아직 없어요!! 처음으로 질문을 입력해보세요!
          </NoData>
        )}
        {data?.fetchUseditemQuestions.map((el: any) => (
          <ProductCommentListUIItem key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </Back>
  );
}
