import styled from '@emotion/styled'


export default function AAAPage() {
    // 여기는 자바스크립트 쓰는곳!

  const BackGround = styled.div`
  box-shadow: 0px 4px 20px;
  width: 1200px;
  height: 1847px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  `
  const MyTitle = styled.div`
  width: 174px;
  height: 53px;
  font-size: 36px;
  margin-bottom: 50px;
  `

  const MyBody = styled.div`
  width: 1000px;
  height: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  `


  const BackTop = styled.div`
  height: 90px;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  `

  const TopLt = styled.div`
  height: 90px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ` 
 const MyName = styled.div`
   font-size : 16px;
   color: black;
   width: 45;
   height: 24;
  `
  const PutName = styled.input`
  font-size : 16px;
  color: #c4c4c4;
  border: 1px solid #BDBDBD;
  width : 486px;
  height: 52px;
  margin-top: 12px;
 `

  const TopRt = styled.div`
    height: 90px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  `
  const PutPass = styled.input`
    font-size : 16px;
  color: #c4c4c4;
  border: 1px solid #BDBDBD;
  width : 486px;
  height: 52px;
  margin-top: 12px;
  `

    const TitleBox = styled.div`
     height: 130px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  `

    const PutTitle = styled.input`
       font-size : 16px;
      color: #c4c4c4;
      border: 1px solid #BDBDBD;
      width : 1000px;
      height: 52px;
      margin-top: 12px;
  `
      const TextBox = styled.div`
        height: 500px;
        width: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    `
  
      const PutText = styled.input`
      
      font-size : 16px;
      color: #c4c4c4;
      border: 1px solid #BDBDBD;
      width : 1000px;
      height: 400px;
      margin-top: 12px;
     

    `
    const AddBox = styled.div`
        height: 300px;
        width: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
  `
      const AddTop = styled.div`
        height: 52px;
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

  
    `
  

  const SurchPut = styled.input`
   font-size : 16px;
      color: #c4c4c4;
      border: 1px solid #BDBDBD;
      width : 77px;
      height: 52px;
      margin-top: 12px;

`
const SurchPush = styled.button`
   font-size : 16px;
      color: white;
      background-color: black;
      width : 124px;
      height: 52px;
      margin-top: 12px;
      margin-left: 12px;

`
const JustBox = styled.input`
      border: 1px solid #BDBDBD;
      width : 996px;
      height: 52px;
      margin-top: 12px;


`
const YouTubeBox = styled.div`
     height: 130px;
      width: 1000px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

`
const CopyYouTube = styled.input`
      font-size : 16px;
      color: #c4c4c4;
      border: 1px solid #BDBDBD;
      width : 996px;
      height: 52px;
      margin-top: 12px;

`

const PhotoBox = styled.div`
        height: 200px;
        width: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

`
const GrayBoxBox = styled.div`
        height: 100px;
        width: 1000px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;


`
const GrayBox = styled.div`
        height: 78px;
        width: 78px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #BDBDBD;
        margin-right: 20px;


`
const MyPlus = styled.div`
font-size: 12px;
color: #4F4F4F;
`
const MyUpload = styled.div`
font-size: 12px;
color: #4F4F4F;


`

const MainBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

`
const MySelect = styled.div`
display: flex;
flex-direction: row;

`

const MainSelect1 = styled.input`

`
const MainSelect2 = styled.input`

`


const InBox = styled.button`
        height: 52px;
        width: 179px;
        background-color: #FFD600;
        color: black;
        font-size: 16px;


`


 
  return (
//    여기는 HTML쓰는곳
    // <MyTitle >
        
    //     <MyId>아이디</MyId>
    //     <MyEmail type = "text"/>
    //     <MyPass>비밀번호</MyPass>
    //     <MyPw type = "password"/>
    // </MyTitle>

    <BackGround>
        <MyTitle>게시물 등록</MyTitle>
        <MyBody>
          <BackTop>
            <TopLt>
              <MyName>작성자</MyName>
              <PutName placeholder='이름을 입력하세요' type = "text"></PutName>
            </TopLt>
            <TopRt>
              <MyName>비밀번호</MyName>
              <PutPass type="password" placeholder='비밀번호를 입력해주세요.'></PutPass>
            </TopRt>
          </BackTop>
          <TitleBox>
            <MyName>제목</MyName>
            <PutTitle placeholder='제목을 작성해주세요.' type = "text"></PutTitle>
          </TitleBox>
          <TextBox>
            <MyName>내용</MyName>
            <PutText placeholder='내용을 작성해주세요.' type = "text"></PutText>
          </TextBox> 
          <AddBox>
            <MyName>주소</MyName>
            <AddTop>
              <SurchPut placeholder='07250' type = "number"></SurchPut>
              <SurchPush>우편번호 검색</SurchPush>
            </AddTop>
            <JustBox></JustBox>
            <JustBox></JustBox>
          </AddBox>
          <YouTubeBox>
            <MyName>유튜브</MyName>
            <CopyYouTube placeholder='링크를 복사해주세요.' type = "text"></CopyYouTube>
          </YouTubeBox> 
          <PhotoBox>
            <MyName>사진첨부</MyName>
            <GrayBoxBox>
              <GrayBox>
                <MyPlus>+</MyPlus>
                <MyUpload>Upload</MyUpload>
              </GrayBox>
              <GrayBox>
                <MyPlus>+</MyPlus>
                <MyUpload>Upload</MyUpload>
              </GrayBox>
              <GrayBox>
                <MyPlus>+</MyPlus>
                <MyUpload>Upload</MyUpload>
              </GrayBox>
            </GrayBoxBox>
          </PhotoBox>
          <MainBox>
            <MyName>메인 설정</MyName>
            <MySelect>
              <MainSelect1 type="radio" name='main'/>유튜브
              <MainSelect2 type="radio" name='main'/>사진
            </MySelect>
          </MainBox>
        </MyBody>
        <InBox>등록하기</InBox>
    </BackGround>
  )
}
