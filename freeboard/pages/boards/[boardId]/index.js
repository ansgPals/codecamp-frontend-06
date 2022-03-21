import{useQuery, gql} from "@apollo/client"
import { useRouter } from "next/router"


const FETCH_BOARD = gql`

    query fetchBoard($boardId : ID!){
        fetchBoard( boardId : $boardId){
        _id 
        writer
        title
        contents
       }
}

`

import {
    
    BackGround,
    TopBack,
    TopLeft,
    ProFilePhoto,
    NameDate,
    Name,
    Date,
    TopRight,
    YellowItem1,
    YellowItem2,
    ResponseDataBox,
    TitleBox,
    DetailBox,
    YoutubeBox,
    LikeUnLikeBox,
    LikeBox,
    GoodBox,
    LikeNumber,
    UnLikeBox,
    BadBox,
    UnLikeNumber,
    ImageBox
    
    
} from '../../../styles/board-new'



export default function BoardRoadPage() {
    const router = useRouter()
     console.log(router)
     const{data} = useQuery(FETCH_BOARD,{
         variables: {boardId : router.query.boardId}
     })
     console.log(data)

    return(<>
      
            <BackGround>
                <TopBack>
                    <TopLeft>
                        <ProFilePhoto></ProFilePhoto>
                        <NameDate>
                            <Name>{data?.fetchBoard.writer}</Name>
                            <Date>date : 2021.02.18</Date>
                        </NameDate>
                    </TopLeft>
                    <TopRight>
                        <YellowItem1></YellowItem1>
                        <YellowItem2></YellowItem2>
                    </TopRight>
                </TopBack>
                <ResponseDataBox>
                    <TitleBox>{data?.fetchBoard.title}</TitleBox>
                    <ImageBox> </ImageBox>
                    <DetailBox>{data?.fetchBoard.contents}</DetailBox>
                    <YoutubeBox></YoutubeBox>
                </ResponseDataBox>
                <LikeUnLikeBox>
                    <LikeBox><GoodBox></GoodBox><LikeNumber>1234</LikeNumber></LikeBox>
                    <UnLikeBox><BadBox></BadBox><UnLikeNumber>5678</UnLikeNumber></UnLikeBox>
                </LikeUnLikeBox>
            </BackGround>
    </>)
}