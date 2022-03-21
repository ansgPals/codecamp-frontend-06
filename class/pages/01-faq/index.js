import styled from '@emotion/styled'

  
    const MyBack = styled.div`
        width : 640px;
        height: 1138px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #cacaca;
        margin: 10px;

    ` 
    const Mytop = styled.div`
        width : 640px;
        height: 62px;

    
    `
    const MyLensBox = styled.div`
        width : 640px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        padding: 0% 5%;
    `
    const MyLens = styled.div`
        background-image: url('/test/lens.png');
        width: 32px;
        height: 32px;
    `
   


  const MyTitle = styled.div`
       width: 640px;
       height: 60px;
       display: flex;
       flex-direction: row;
       justify-content: space-between;

    `
    const MyTLt = styled.div`
        font-size: 40px;
        margin-left: 5%;
    `

    const MyTRt = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `

    const MyFace = styled.div`
     background-image: url('/test/얼굴.png');
     width: 60px;
     height: 60px;

    `
    const MyName = styled.div`
        font-size: 24px;
    `
    const MyAr = styled.div`
        width : 28px;
        height: 28px;
        background-image: url('/test/>.png');
    `

    const MyNav = styled.div`
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
       width: 530px;
       height: 160px;
    `

    const MyNav123 = styled.div`
        font-size : 30px;
        color: #cacaca;
    `
    const MyNav4 = styled.div`
            font-size : 30px;

        color: #ff1b6d;

    `
    const GrayLine = styled.div`
        border-top: 1px solid #cacaca;
        width: 600px;
        height: 5px;
        margin: 10px 10px;
    `
    const MyBdy = styled.div`
        display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
       width: 530px;
       height: 600px;

    `

    const MyBodyLt = styled.div`
        display: flex;
       flex-direction: column;
       justify-content: space-between;
       align-items: flex-start;
       width: 370px;
       height: 600px;

    `
    const MyBodyLtQ = styled.div`
    font-size: 18px;
    color: #adadad;
    height: 20px;
    width: 490px;
    `

    const MyBodyLtT = styled.div`
        font-size: 24px;
    color: #444444;
    height: 26px;
    width: 490px;

    `


    const MyBodyRt = styled.div`
        display: flex;
       flex-direction: column;
       justify-content: space-between;
       align-items: center;
       width: 170px;
       height: 600px;

    `
    const MyBodyRtAr = styled.div`
            background-image: url('/test/아래화살.png');
            width: 60px;
            height: 60px;

`
    const MyFoot = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    `

    const MyFoot1 = styled.div`
        height: 70px;
        width: 500px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `
    const MyFootimg1 = styled.div`
        height: 58px;
        width: 58px;
        background-image: url('/test/홈.png');

    `
    const MyFootimg2 = styled.div`
        height: 58px;
        width: 58px;
        background-image: url('/test/지도.png');
    `
    const MyFootimg3 = styled.div`
         height: 58px;
         width: 58px;
         background-image: url('/test/하트.png');
    `
    const MyFootimg4 = styled.div`
        height: 58px;
        width: 58px;
        background-image: url('/test/핑쿠.png');

    `
    const MyFoot2 = styled.div`
        height: 30px;
        width: 480px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      



    `
    const MyfootT1 = styled.div`
    font-size: 16px;
    color: #adadad;
    padding-left: 12px;
    `

    const MyfootT2 = styled.div`
    font-size: 16px;
    color: #adadad;



    
    padding-left: 10px;

    `

    const MyfootT3 = styled.div`
    font-size: 16px;
    color: #adadad;
    padding-right: 10px;
    `

    const MyfootTP = styled.div`
    font-size:  16px;
    color: #ff1b6d;

    `
    







export default function AAAPage() {

    // 여기는 자바스크립트 쓰는곳




  return (
//    여기는 HTML쓰는곳
    <MyBack>
        <Mytop></Mytop>
        <MyLensBox><MyLens></MyLens></MyLensBox>
        <MyTitle>
            <MyTLt> 마이 </MyTLt>
            <MyTRt>
                <MyFace></MyFace>
                <MyName>임정아</MyName>
                <MyAr></MyAr>
            </MyTRt>
        </MyTitle>
        <MyNav>
            <MyNav123>공지사항</MyNav123>
            <MyNav123>이벤트</MyNav123>
            <MyNav4>FAQ</MyNav4>
            <MyNav123>Q&A</MyNav123>
        </MyNav>
        <GrayLine></GrayLine>
        <MyBdy>
            <MyBodyLt>
                <MyBodyLtQ>Q.01</MyBodyLtQ>
                <MyBodyLtT>리뷰 작성은 어떻게 하나요?</MyBodyLtT>
                <MyBodyLtQ>Q.02</MyBodyLtQ>
                <MyBodyLtT>리뷰 수정/삭제는 어떻게 하나요?</MyBodyLtT>
                <MyBodyLtQ>Q.03</MyBodyLtQ>
                <MyBodyLtT>아이디/비밀번호를 잊어버렸어요.</MyBodyLtT>
                <MyBodyLtQ>Q.04</MyBodyLtQ>
                <MyBodyLtT>회원탈퇴를 하고싶어요.</MyBodyLtT>
                <MyBodyLtQ>Q.05</MyBodyLtQ>
                <MyBodyLtT>출발지 설정은 어떻게 하나요?</MyBodyLtT>
                <MyBodyLtQ>Q.06</MyBodyLtQ>
                <MyBodyLtT>비밀번호를 변경하고 싶어요</MyBodyLtT>

            </MyBodyLt>
            <MyBodyRt>
                <MyBodyRtAr></MyBodyRtAr>
                <MyBodyRtAr></MyBodyRtAr>
                <MyBodyRtAr></MyBodyRtAr>
                <MyBodyRtAr></MyBodyRtAr>
                <MyBodyRtAr></MyBodyRtAr>
                <MyBodyRtAr></MyBodyRtAr>
            </MyBodyRt>
        </MyBdy>
        <GrayLine></GrayLine>
        <MyFoot>
            <MyFoot1>
                <MyFootimg1></MyFootimg1>
                <MyFootimg2></MyFootimg2>
                <MyFootimg3></MyFootimg3>
                <MyFootimg4></MyFootimg4>
            </MyFoot1>

            <MyFoot2>
                <MyfootT1>홈</MyfootT1>
                <MyfootT2>잇츠로드</MyfootT2>
                <MyfootT3>마이찜</MyfootT3>
                <MyfootTP>마이</MyfootTP>
            </MyFoot2>
        </MyFoot>

    </MyBack>
  )
}
