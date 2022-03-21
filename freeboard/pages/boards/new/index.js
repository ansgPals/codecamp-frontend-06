import {useRouter} from 'next/router'
import{useState} from "react"
import styled from '@emotion/styled'
import {useMutation ,gql}from '@apollo/client'



  const BackGround = styled.div`
    box-shadow: 0px 4px 20px;
    width: 1200px;
    padding: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  `;
  const MyTitle = styled.div`
    width: 174px;
    height: 53px;
    font-size: 36px;
    margin-bottom: 50px;
  `;

  const MyBody = styled.div`
    width: 1000px;
    height: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `;

  const BackTop = styled.div`
    height: 90px;
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const TopLt = styled.div`
    height: 90px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `;
  const MyErr = styled.div`
    color: red;
  `;
  const MyName = styled.div`
    font-size: 16px;
    color: black;
    width: 45;
    height: 24;
  `;
  const PutName = styled.input`
    font-size: 16px;
    color: #c4c4c4;
    border: 1px solid #bdbdbd;
    width: 486px;
    height: 52px;
    margin-top: 12px;
  `;

  const TopRt = styled.div`
    height: 90px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `;
  const PutPass = styled.input`
    font-size: 16px;
    color: #c4c4c4;
    border: 1px solid #bdbdbd;
    width: 486px;
    height: 52px;
    margin-top: 12px;
  `;

  const TitleBox = styled.div`
    height: 130px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `;

  const PutTitle = styled.input`
    font-size: 16px;
    color: #c4c4c4;
    border: 1px solid #bdbdbd;
    width: 1000px;
    height: 52px;
    margin-top: 12px;
  `;
  const TextBox = styled.div`
    height: 500px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `;

  const PutText = styled.input`
    font-size: 16px;
    color: #c4c4c4;
    border: 1px solid #bdbdbd;
    width: 1000px;
    height: 400px;
    margin-top: 12px;
  `;
  const AddBox = styled.div`
    height: 300px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `;
  const AddTop = styled.div`
    height: 52px;
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `;

  const SurchPut = styled.input`
    font-size: 16px;
    color: #c4c4c4;
    border: 1px solid #bdbdbd;
    width: 77px;
    height: 52px;
    margin-top: 12px;
  `;
  const SurchPush = styled.button`
    font-size: 16px;
    color: white;
    background-color: black;
    width: 124px;
    height: 52px;
    margin-top: 12px;
    margin-left: 12px;
  `;
  const JustBox = styled.input`
    border: 1px solid #bdbdbd;
    width: 996px;
    height: 52px;
    margin-top: 12px;
  `;
  const YouTubeBox = styled.div`
    height: 130px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `;
  const CopyYouTube = styled.input`
    font-size: 16px;
    color: #c4c4c4;
    border: 1px solid #bdbdbd;
    width: 996px;
    height: 52px;
    margin-top: 12px;
  `;

  const PhotoBox = styled.div`
    height: 200px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `;
  const GrayBoxBox = styled.div`
    height: 100px;
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `;
  const GrayBox = styled.div`
    height: 78px;
    width: 78px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #bdbdbd;
    margin-right: 20px;
  `;
  const MyPlus = styled.div`
    font-size: 12px;
    color: #4f4f4f;
  `;
  const MyUpload = styled.div`
    font-size: 12px;
    color: #4f4f4f;
  `;

  const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `;
  const MySelect = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const MainSelect1 = styled.input``;
  const MainSelect2 = styled.input``;

  const InBox = styled.button`
    height: 52px;
    width: 179px;
    background-color: #ffd600;
    color: black;
    font-size: 16px;
  `;


  // ======================================스타일

  const CREATE_BOARD = gql`
      mutation createBoard($createBoardInput: CreateBoardInput!)
      {createBoard(createBoardInput : $createBoardInput)
        { _id}
        
      }
  `;   
      //  # $writer: String, $password: String, $title: String!, $contents: String!){
      //   # createBoard(writer: $writer, password: $password, title: $title, contents: $contents


 export default function(){
    // 여기는 자바스크립트 쓰는곳!
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [address, setAddress] = useState("");

    const [nameErr, setNameErr] = useState("");
    const [passErr, setPassErr] = useState("");
    const [titleErr, setTitleErr] = useState("");
    const [textErr, setTextErr] = useState("");
    const [addressErr, setAddressErr] = useState("");


    const[createBoard]=useMutation(CREATE_BOARD)
    const router =useRouter()

    const onChangeName = (event) => {
      setName(event.target.value);
      if (event.target.value !== "") {
        setNameErr("");
      }
    };
    const onChangePass = (event) => {
      setPass(event.target.value);
      if (event.target.value !== "") {
        setPassErr("");
      }
    };

    const onChangeTitle = (event) => {
      setTitle(event.target.value);
      if (event.target.value !== "") {
        setTitleErr("");
      }
    };

    const onChangeText = (event) => {
      setText(event.target.value);
      if (event.target.value !== "") {
        setTextErr("");
      }
    };

    const onChangeAddress = (event) => {
      setAddress(event.target.value);
      if (event.target.value !== "") {
        setAddressErr("");
      }
    };

    const PutOk = async () => {    
      if (name === "") {
        setNameErr("이름을 입력하세요");
      }
      if (pass === "") {
        setPassErr("비밀번호를 입력하세요.");
      }
      if (title === "") {
        setTitleErr("내용를 입력하세요.");
      }

      if (text === "") {
        setTextErr("내용을 입력하세요.");
      }

      if (address === "") {
        setAddressErr("주소를 입력하세요.");
      }
      if (
        name !== "" &&
        pass !== "" &&
        title !== "" &&
        text !== "" &&
        address !== ""
      )  { try {
        const result = await createBoard({
          variables : {createBoardInput: {writer: name, password: pass ,title: title ,contents: text}}
        })
        console.log(result.data.createBoard._id);
        alert("게시물등록완료")
        router.push(`/boards/${result.data.createBoard._id}`)



      } catch (error) {
        console.log(error,message)
      }
    }}

    return (
      //    여기는 HTML쓰는곳

      <BackGround>
        <MyTitle>게시물 등록</MyTitle>
        <MyBody>
          <BackTop>
            <TopLt>
              <MyName>작성자</MyName>
              <PutName
                placeholder="이름을 입력하세요"
                type="text"
                onChange={onChangeName}
              ></PutName>
              <MyErr>{nameErr}</MyErr>
            </TopLt>
            <TopRt>
              <MyName>비밀번호</MyName>
              <PutPass
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={onChangePass}
              ></PutPass>
              <MyErr>{passErr}</MyErr>
            </TopRt>
          </BackTop>
          <TitleBox>
            <MyName>제목</MyName>
            <PutTitle
              placeholder="제목을 작성해주세요."
              type="text"
              onChange={onChangeTitle}
            ></PutTitle>
            <MyErr>{titleErr}</MyErr>
          </TitleBox>
          <TextBox>
            <MyName>내용</MyName>
            <PutText
              placeholder="내용을 작성해주세요."
              type="text"
              onChange={onChangeText}
            ></PutText>
            <MyErr>{textErr}</MyErr>
          </TextBox>
          <AddBox>
            <MyName>주소</MyName>

            <AddTop>
              <SurchPut
                placeholder="07250"
                type="number"
                onChange={onChangeAddress}
              ></SurchPut>
              <SurchPush>우편번호 검색</SurchPush>
            </AddTop>
            <JustBox></JustBox>
            <JustBox></JustBox>
            <MyErr>{addressErr}</MyErr>
          </AddBox>
          <YouTubeBox>
            <MyName>유튜브</MyName>
            <CopyYouTube
              placeholder="링크를 복사해주세요."
              type="text"
            ></CopyYouTube>
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
              <MainSelect1 type="radio" name="main" />
              유튜브
              <MainSelect2 type="radio" name="main" />
              사진
            </MySelect>
          </MainBox>
        </MyBody>
        <InBox onClick={PutOk}>등록하기</InBox>
      </BackGround>
    );
  }

