import * as MyStyle from "./boardShow.styles";
import { getDate } from "../../board/libraries/util";
import { IBoardRoadUIProps } from "./boardShow.types";
import ReactPlayer from "react-player";

export default function BoardRoadUI(props: IBoardRoadUIProps) {
  return (
    <>
      <MyStyle.Back>
        <MyStyle.BackGround>
          <MyStyle.TopBack>
            <MyStyle.TopLeft>
              <MyStyle.ProFilePhoto></MyStyle.ProFilePhoto>
              <MyStyle.NameDate>
                <MyStyle.Name>{props.data?.fetchBoard.writer}</MyStyle.Name>
                <MyStyle.Date>
                  {getDate(props.data?.fetchBoard?.createdAt)}
                </MyStyle.Date>
              </MyStyle.NameDate>
            </MyStyle.TopLeft>
            <MyStyle.TopRight>
              <MyStyle.YellowItem1></MyStyle.YellowItem1>
              <MyStyle.YellowItem2></MyStyle.YellowItem2>
            </MyStyle.TopRight>
          </MyStyle.TopBack>
          <MyStyle.ResponseDataBox>
            <MyStyle.TitleBox>{props.data?.fetchBoard.title}</MyStyle.TitleBox>
            <MyStyle.ImageBox> </MyStyle.ImageBox>
            <MyStyle.DetailBox>
              {props.data?.fetchBoard.contents}
            </MyStyle.DetailBox>
            {props.data?.fetchBoard.youtubeUrl && (
              <MyStyle.YoutubeBox>
                <ReactPlayer
                  url={props.data?.fetchBoard.youtubeUrl}
                  width={486}
                  height={240}
                />
              </MyStyle.YoutubeBox>
            )}
          </MyStyle.ResponseDataBox>
          <MyStyle.LikeUnLikeBox>
            <MyStyle.LikeBox>
              <MyStyle.GoodBox onClick={props.LikeButton}></MyStyle.GoodBox>
              <MyStyle.LikeNumber>
                {props.data?.fetchBoard.likeCount}
              </MyStyle.LikeNumber>
            </MyStyle.LikeBox>
            <MyStyle.UnLikeBox>
              <MyStyle.BadBox onClick={props.DisLikeButton}></MyStyle.BadBox>
              <MyStyle.UnLikeNumber>
                {props.data?.fetchBoard.dislikeCount}
              </MyStyle.UnLikeNumber>
            </MyStyle.UnLikeBox>
          </MyStyle.LikeUnLikeBox>
        </MyStyle.BackGround>
        <MyStyle.ButtonBox>
          <MyStyle.MyButton onClick={props.OnClickList}>
            목록으로
          </MyStyle.MyButton>
          <MyStyle.MyButton onClick={props.OnClickEdit}>
            수정하기
          </MyStyle.MyButton>
          <MyStyle.MyButton onClick={props.OnClickDelete}>
            삭제하기
          </MyStyle.MyButton>
        </MyStyle.ButtonBox>
      </MyStyle.Back>
    </>
  );
}
