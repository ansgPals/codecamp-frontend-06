import * as S from "../productList/productList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { IProductListUI } from "./productList.types";
import { v4 as uuid } from "uuid";
import DOMPurify from "dompurify";

export default function ProductListUI(props: IProductListUI) {
  return (
    <div>
      <S.BackGround>
        {/* <S.ListBox> */}
        <InfiniteScroll
          pageStart={0}
          loadMore={props.CommentScrolling}
          hasMore={true}
          useWindow={true}
        >
          <S.SerchBox>
            <S.SerchDiv>검색으로 더 쉬워지는 마켓</S.SerchDiv>
            <S.SearchInput onChange={props.onchangeSearch}></S.SearchInput>
          </S.SerchBox>
          <S.Contents>
            {props.data?.fetchUseditems.map((el: any) => (
              <div
                key={el._id}
                id={el._id}
                onClick={props.onClickGoProduct(el)}
              >
                <S.MyCard>
                  {el.images[0] ? (
                    <S.CardImage
                      style={{ objectFit: "cover" }}
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  ) : (
                    <S.CardImage
                      src={"/사진없음.png"}
                      style={{ objectFit: "cover" }}
                    />
                  )}

                  <S.MyCardContent>
                    <S.ProductName gutterBottom variant="h5">
                      {el.name
                        .replace(props.keyWord, `!@#$%${props.keyWord}!@#$%`)
                        .split("!@#$%")
                        .map((word: any) => (
                          <S.SearchWord
                            key={uuid()}
                            isMatched={props.keyWord === word}
                          >
                            {word}
                          </S.SearchWord>
                        ))}
                    </S.ProductName>
                    <S.ProductInfo>
                      가격 : {el.price}
                      <br />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(el.contents),
                        }}
                      ></div>
                    </S.ProductInfo>
                  </S.MyCardContent>
                  <S.CardButton></S.CardButton>
                </S.MyCard>
              </div>
            ))}{" "}
          </S.Contents>
        </InfiniteScroll>
        {/* </S.ListBox> */}
      </S.BackGround>
    </div>
  );
}
