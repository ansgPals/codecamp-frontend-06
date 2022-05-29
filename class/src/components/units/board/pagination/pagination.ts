export interface IPaginationPageProps {
  startPage: number;
  pickPage: number;
  lastPage: number;
  OnclickPage: (pageNumber: number) => () => void;
  OnClickPrevPage: () => void;
  OnClickVeryPrevPage: () => void;
  OnClickNextPage: () => void;
  OnClickVeryNextPage: () => void;
}
