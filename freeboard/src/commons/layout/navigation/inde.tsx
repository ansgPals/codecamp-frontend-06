import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 64px;
  width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff200;
`;

export default function LayOutNavigation() {
  return <Wrapper>네비게이션 영역입니다.</Wrapper>;
}
