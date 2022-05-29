import { Dispatch, SetStateAction, useState } from "react";
import PaginationResenter from "./pagination.presenter";

export default function PagiNationComponent({
  dataCount,
  refetch,
  setPickPage,
  pickPage,
  setStartPage,
  startPage,
  numberOfPageData,
}: {
  dataCount: number;
  refetch: any;
  setPickPage: Dispatch<SetStateAction<number>>;
  pickPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  startPage: number;
  numberOfPageData: number;
}) {
  const lastPage = Math.ceil(dataCount / numberOfPageData);
  console.log(lastPage);
  const OnclickPage = (pageNumber: number) => () => {
    setPickPage(pageNumber);
    refetch({ page: Number(pageNumber) });

    sessionStorage.setItem("pageNumber", JSON.stringify(pageNumber));
  };
  const OnClickPrevPage = () => {
    if (startPage === 1) return;
    if (startPage - 5 > 0) {
      setStartPage((prev: number) => prev - 5);
      refetch({ page: startPage - 5 });
      setPickPage(startPage - 5);
      sessionStorage.setItem("pageNumber", JSON.stringify(startPage - 5));
    } else {
      setStartPage(1);
      refetch(1);
      setPickPage(1);
      sessionStorage.setItem("pageNumber", JSON.stringify(1));
    }
  };
  const OnClickVeryPrevPage = () => {
    refetch({ page: 1 });
    setStartPage(1);
    setPickPage(1);
    sessionStorage.setItem("pageNumber", JSON.stringify(1));
  };

  const OnClickNextPage = () => {
    refetch({ page: startPage + 5 });

    setPickPage(startPage + 5);
    setStartPage((prev: number) => prev + 5);
    sessionStorage.setItem("pageNumber", JSON.stringify(startPage + 5));
  };

  const OnClickVeryNextPage = () => {
    refetch({ page: lastPage });
    setPickPage(lastPage);
    setStartPage(lastPage - 4);
    sessionStorage.setItem("pageNumber", JSON.stringify(lastPage));
  };

  return (
    <PaginationResenter
      startPage={startPage}
      pickPage={pickPage}
      lastPage={lastPage}
      OnclickPage={OnclickPage}
      OnClickPrevPage={OnClickPrevPage}
      OnClickVeryPrevPage={OnClickVeryPrevPage}
      OnClickNextPage={OnClickNextPage}
      OnClickVeryNextPage={OnClickVeryNextPage}
    ></PaginationResenter>
  );
}
