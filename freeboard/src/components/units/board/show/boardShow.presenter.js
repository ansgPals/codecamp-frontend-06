import * as MyStyle from './boardShow.styles' 

export default function BoardRoadUI(props) {

  return(<>
    
          <MyStyle.BackGround>
              <MyStyle.TopBack>
                  <MyStyle.TopLeft>
                      <MyStyle.ProFilePhoto></MyStyle.ProFilePhoto>
                      <MyStyle.NameDate>
                          <MyStyle.Name>{props.data?.fetchBoard.writer}</MyStyle.Name>
                          <MyStyle.Date>date : 2021.02.18</MyStyle.Date>
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
                  <MyStyle.DetailBox>{props.data?.fetchBoard.contents}</MyStyle.DetailBox>
                  <MyStyle.YoutubeBox></MyStyle.YoutubeBox>
              </MyStyle.ResponseDataBox>
              <MyStyle.LikeUnLikeBox>
                  <MyStyle.LikeBox><MyStyle.GoodBox></MyStyle.GoodBox><MyStyle.LikeNumber>1234</MyStyle.LikeNumber></MyStyle.LikeBox>
                  <MyStyle.UnLikeBox><MyStyle.BadBox></MyStyle.BadBox><MyStyle.UnLikeNumber>5678</MyStyle.UnLikeNumber></MyStyle.UnLikeBox>
              </MyStyle.LikeUnLikeBox>
          </MyStyle.BackGround>
  </>)
}