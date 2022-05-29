import { IPaginationPageProps } from "./pagination";
import * as S from "./pagination.style";

export default function PaginationResenter(props: IPaginationPageProps) {
  return (
    <S.PaginationWrapper>
      {props.startPage === 1 ? (
        <>
          {" "}
          <S.DoubleArrow src="/pagination/graydoublearrowL.png" />
          <S.Arrow src="/pagination/grayarrowL.png" />
        </>
      ) : (
        <>
          {" "}
          <S.DoubleArrow
            onClick={props.OnClickVeryPrevPage}
            src="/pagination/doubleL.png"
          />
          <S.Arrow
            onClick={props.OnClickPrevPage}
            src="/pagination/arrowL.png"
          />
        </>
      )}
      <S.NumberWrapper>
        {new Array(5).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <S.NumberButton
                key={index + props.startPage}
                onClick={props.OnclickPage(index + props.startPage)}
                isPicked={props.pickPage === index + props.startPage}
              >
                {index + props.startPage}
              </S.NumberButton>
            )
        )}
      </S.NumberWrapper>
      {props.startPage + 5 > props.lastPage ? (
        <>
          <S.Arrow src="/pagination/grayarrowR.png" />
          <S.DoubleArrow src="/pagination/graydoublearrowR.png" />
        </>
      ) : (
        <>
          <S.Arrow
            onClick={props.OnClickNextPage}
            src="/pagination/arrowR.png"
          />
          <S.DoubleArrow
            onClick={props.OnClickVeryNextPage}
            src="/pagination/doubleR.png"
          />
        </>
      )}
    </S.PaginationWrapper>
  );
}
