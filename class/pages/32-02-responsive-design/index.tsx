import styled from "@emotion/styled";
const Wrapper = styled.div`
  width: 62.5em; /// 62.5rem; /// 1000px;
  height: 1000px;
  background-color: red;
  @media (max-width: 991px) and (min-width: 768px) {
    width: 500px;
    height: 500px;
    background-color: green;
  }
  @media (max-width: 767px) {
    width: 70vw;
    height: 100px;
    background-color: yellow;
    /* display: none; */
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}
