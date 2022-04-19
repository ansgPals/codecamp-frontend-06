import * as S from "../productList/productList.styles";
import InfiniteScroll from "react-infinite-scroller";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";

export default function ProductListUI(props) {
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
          <S.Contents>
            {props.data?.fetchUseditems.map((el: any) => (
              <div key={el._id} id={el._id} onClick={props.onClickGoProduct}>
                <S.MyCard>
                  <S.CardImage
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />

                  <CardContent>
                    <S.ProductName gutterBottom variant="h5">
                      {el.name}
                    </S.ProductName>
                    <S.ProductInfo variant="body2" color="text.secondary">
                      가격 : {el.price}
                      <br />
                      {el.contents}
                    </S.ProductInfo>
                  </CardContent>
                  <S.CardButton>
                    <Button size="small">찜</Button>
                    <Button size="small">더 알아보기</Button>
                  </S.CardButton>
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
