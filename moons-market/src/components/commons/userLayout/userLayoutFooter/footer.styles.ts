import styled from "@emotion/styled";

export const Wrraper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  margin: auto;
  justify-content: flex-end;
  position: relative;
  background: #fafafa;
  /* @media (max-width: 1440px) {
    min-width: 1440px;
  } */
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  z-index: 1;
`;

export const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0 4rem 0;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img`
  width: 10.266rem;
  height: 1.866rem;
  margin-bottom: 2.8rem;
`;

export const FooterBodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 9.466rem;
  @media (max-width: 1250px) {
    margin-bottom: 2rem;
  }
`;

export const Site = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SiteTitle = styled.div`
  font-family: "SUIT700";
  font-style: normal;
  font-size: 1.2rem;
`;
export const SiteBody = styled.div`
  min-width: fit-content;
  font-family: "SUIT500";
  font-style: normal;
  font-size: 1.2rem;
  color: #6b6c73;
`;

export const Span = styled.span`
  font-family: "SUIT700";
  font-style: normal;
  font-size: 1.2rem;
  color: "#6B6C73";
`;

export const FooterBodyRight = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 7.866rem; */
`;

export const Map = styled.div`
  width: 31.133rem;
  height: 100%;
  /* position: absolute;
  top: 0;
  right: 0; */
`;

export const Img = styled.img`
  width: 2.266rem;
  height: 2.266rem;
`;

export const Img1 = styled.img`
  margin: 0.266rem;
`;

export const MapDiv = styled.div`
  width: 26.933rem;
  height: 31.5rem;
  margin-left: 15rem;
  /* @media (max-width: 1440px), (min-width: 1250px) {
    width: 13.444rem;
  } */
  @media (max-width: 1250px) {
    display: none;
  }
  /* position: relative; */
`;

export const MapImg = styled.img`
  width: 26.933rem;
  height: 100%;
  @media (max-width: 1440px) {
    width: 13.444rem;
  }
`;

export const MarkImg = styled.img`
  position: absolute;
  right: center;
  top: center;
  z-index: 12;
`;
