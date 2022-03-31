import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 200px;
  width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

export default function LayOutFooter() {
  return <Wrapper>여기는 Footer영역입니다.</Wrapper>;
}
