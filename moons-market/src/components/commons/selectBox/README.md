사용방법

const [state, setState] = useState("");
const [aaa, setAaa] = useState(false)

<SelectBoxComponent
arr={["aaa", "bbbb"]}
title={"qweqwe"}
setState={setState}
color={"#dddd"}
width={"150px"}
height={"20px"}
borderColor={"#6400FF"}
backgroundColor={"#F0F0F0"}
disabled={true}
margin="0 0 10px 0"
padding="0 0 10px 0"
optacity="0.3"
reset={aaa}
/>

props

1. arr(필수) : 옵션태그에 들어갈 목록의 배열
2. title(필수): 처음 셀렉트 박스의 디폴트값
3. setState(필수): 선택한 값을 받아서 상태를 변화를 시켜주는 setState 함수 단, qnaDetailSelectBox에서는 선택옵션
4. color: 처음 셀렉트 박스의 디폴트값의 보더와 글자 색깔
5. width: 셀렉트박스에 너비
6. height: 셀렉트박스에 높이
7. borderColor: border의 색상
8. backgroundColor: 바탕색상
9. disabled: 활성화 비활성화 (true: 비활성화, false: 활성화)
10. margin: 셀렉트 컴포넌트에 margin 값
11. padding: 셀렉트 컴포넌트에 padding 값
12. opacity: 처음 셀렉트 박스의 디폴트값의 투명도
13. reset: 셀렉트박스 초기화 시키는 것 true이면 초기화
