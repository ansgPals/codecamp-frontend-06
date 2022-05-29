import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 300px;
  height: calc(100vh - 64px);
  background-color: #ffffff;
  box-shadow: inset 0px 15px 24px -13px rgba(0, 0, 0, 0.08);
`;

export default function LayOutNavigation() {
  return <Wrapper></Wrapper>;
}
