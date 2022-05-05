import { useQuery } from "@apollo/client";
import _ from "lodash";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { todayProductState } from "../../../commons/store";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import ProductListUI from "./productList.presenter";
import { FETCH_USEDITEMS } from "./productList.quries";

export default function ProductListContainer() {
  const [, setTodayProduct] = useRecoilState(todayProductState);
  const [keyword, setkeyword] = useState("");
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);

  const router = useRouter();
  console.log(router);

  const onClickGoProduct = (el) => (event) => {
    const todayProduct = JSON.parse(
      localStorage.getItem("todayProduct") || "[]"
    );
    const temp = todayProduct.filter((El: any) => El._id === el._id);
    if (temp.length === 0) {
      todayProduct.push(el);
      localStorage.setItem("todayProduct", JSON.stringify(todayProduct));
      setTodayProduct(todayProduct);
    }

    if (event.target instanceof Element)
      router.push(`/usedItem/${event.currentTarget.id}`);
    //   instanceof HTMLDivElement라고 써도됨 웹브라우저마다 상황이달라서 타입스크립트에서 못만듬
  };

  const searchDebounce = _.debounce((searchWord: any) => {
    refetch({ search: searchWord, page: 1 });
    setkeyword(searchWord);
  }, 500);

  const onchangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    searchDebounce(event.target.value);
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
      onchangeSearch={onchangeSearch}
      keyWord={keyword}
    />
  );
}
