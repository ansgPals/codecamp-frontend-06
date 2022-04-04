import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 64px;
  width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1a3b6;
`;

export default function LayOutHeader() {
  return <Wrapper>여기는 헤더영역입니다.</Wrapper>;
}
