export interface IPaginationPageProps {
  startPage: number;
  pickPage: number;
  lastPage: number;
  OnclickPage: (pageNumber: number) => () => void;
  OnClickPrevPage: () => void;

  OnClickNextPage: () => void;
}
