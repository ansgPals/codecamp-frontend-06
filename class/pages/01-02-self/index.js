import styled from '@emotion/styled'





export default function AAAPage() {
    // 여기는 자바스크립트 쓰는곳
  const MyTitle = styled.div`
    color : red;
  `

  const MyId = styled.div`
   fontsize : 10px;
  `
  const MyEmail = styled.input`
    width : 200px;
  `
  const MyPass = styled.div`
  fontsize : 10px;
  `
  const MyPw = styled.input`
    width : 200px;
  `
  return (
//    여기는 HTML쓰는곳
    <MyTitle >
        로그인
        <MyId>아이디</MyId>
        <MyEmail type = "text"/>
        <MyPass>비밀번호</MyPass>
        <MyPw type = "password"/>
    </MyTitle>
  )
}
