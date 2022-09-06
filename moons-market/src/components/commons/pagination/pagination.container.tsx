import { useEffect, useState } from "react";
import PaginationResenter from "./pagination.presenter";

export default function PagiNationComponent({
  dataCount,
  refetch,
  numberOfPageData,
  paginationState,
  id,
}: {
  dataCount: number;
  refetch?: any;
  paginationState?: boolean;
  numberOfPageData: number;
  id?: string;
}) {
  const [startPage, setStartPage] = useState(1);
  const [pickPage, setPickPage] = useState(1);

  const lastPage = Math.ceil(dataCount / numberOfPageData);

  // 페이지네이션 숫자 눌렀을때
  const OnclickPage = (pageNumber) => () => {
    setPickPage(pageNumber);
    refetch({ page: Number(pageNumber) });
  };
  // 이전화살표 눌렀을때
  const OnClickPrevPage = () => {
    if (pickPage === 1) return;
    if (pickPage % 5 === 1 && pickPage > 5) {
      setStartPage((prev: number) => prev - 5);
    } else if (pickPage <= 5) {
      setStartPage(1);
    }

    refetch({ page: pickPage - 1 });
    setPickPage((prev) => prev - 1);
  };

  // 다음화살표 눌렀을때
  const OnClickNextPage = () => {
    if (pickPage % 5 === 0) {
      setStartPage((prev) => prev + 5);
    }
    refetch({ page: pickPage + 1 });
    setPickPage((prev) => prev + 1);
  };

  useEffect(() => {
    setPickPage(1);
    setStartPage(1);
  }, [refetch]);

  useEffect(() => {
    setPickPage(1);
    setStartPage(1);
  }, [paginationState]);

  return dataCount ? (
    <PaginationResenter
      startPage={startPage}
      pickPage={pickPage}
      lastPage={lastPage}
      OnclickPage={OnclickPage}
      OnClickPrevPage={OnClickPrevPage}
      OnClickNextPage={OnClickNextPage}
    ></PaginationResenter>
  ) : (
    <div></div>
  );
}
