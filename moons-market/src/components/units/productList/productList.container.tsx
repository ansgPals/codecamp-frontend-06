import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import ProductListUI from "./productList.presenter";
import { FETCH_USEDITEMS } from "./productList.quries";

export default function ProductListContainer() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);

  const lastPage = data?.fetchUseditems.length
    ? Math.ceil(data?.fetchUseditems.length / 10)
    : 0;
  console.log(lastPage);

  const router = useRouter();
  console.log(router);

  const onClickGoProduct = (event) => {
    if (event.target instanceof Element)
      router.push(`/usedItem/${event.currentTarget.id}`);
    //   instanceof HTMLDivElement라고 써도됨 웹브라우저마다 상황이달라서 타입스크립트에서 못만듬
  };

  const CommentScrolling = () => {
    if (!data) return;
    console.log(data);
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <ProductListUI
      CommentScrolling={CommentScrolling}
      onClickGoProduct={onClickGoProduct}
      data={data}
    />
  );
}
