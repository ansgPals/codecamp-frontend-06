import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  width: 300px;
  height: 64px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.08);
`;
const Right = styled.div`
  height: 64px;
  width: calc(100% - 300px);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.08);
`;
export default function LayOutHeader() {
  return (
    <Wrapper>
      <Left></Left>
      <Right></Right>
    </Wrapper>
  );
}
