import { IPaginationPageProps } from "./pagination";
import * as S from "./pagination.style";

export default function PaginationResenter(props: IPaginationPageProps) {
  return (
    <S.PaginationWrapper>
      {props.pickPage === 1 ? (
        <>
          <S.Arrow
            style={{ marginRight: "0.666rem", cursor: "no-drop" }}
            src="/pagination/grayarrowL.png"
          />
        </>
      ) : (
        <>
          <S.Arrow
            style={{ marginRight: "0.666rem" }}
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
      {props.pickPage === props.lastPage ? (
        <S.Arrow
          style={{ marginLeft: "0.666rem", cursor: "no-drop" }}
          src="/pagination/grayarrowR.png"
        />
      ) : (
        <S.Arrow
          style={{ marginLeft: "0.666rem" }}
          onClick={props.OnClickNextPage}
          src="/pagination/arrowR.png"
        />
      )}
    </S.PaginationWrapper>
  );
}
