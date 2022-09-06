import styled from "@emotion/styled";

interface ILayoutHeaderStyleProps {
  isRoute?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 9.6rem 0 5.333rem;
  margin: auto;
  width: 100vw;
  /* min-width: ${(props: ILayoutHeaderStyleProps) =>
    props.isRoute ? "80rem" : "128rem"}; */
  min-width: 80rem;
  height: 6.666rem;
  background: ${(props: ILayoutHeaderStyleProps) =>
    props.isRoute ? "transparent" : "#ffffff"};
  box-shadow: ${(props: ILayoutHeaderStyleProps) =>
    props.isRoute ? "none" : "0px 0.333rem 2.333rem rgba(23, 0, 58, 0.12)"};
  position: ${(props: ILayoutHeaderStyleProps) =>
    props.isRoute ? "absolute" : "relative"};
  z-index: 2;
`;

export const LogoAndTabeltBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderTabletBox = styled.div`
  display: none;
  margin-right: 1.333rem;
  width: 1.333rem;
  height: 1.0953rem;
  @media (max-width: 1700px) {
    display: block;
  }
  cursor: pointer;
`;

export const HeaderTablet = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeaderLogo = styled.div`
  width: 12.4rem;
  height: 1.866rem;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 18.266rem;
`;

export const SpanDiv = styled.div`
  margin-right: 3.333rem;
  cursor: pointer;
`;

export const Span = styled.span`
  font-family: "SUIT500";
  font-style: normal;
  font-size: 1.066rem;
  color: ${(props: ILayoutHeaderStyleProps) =>
    props.isRoute ? "white" : "black"};
`;

export const ProfileImgBox = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const ProfileInfoBox = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0 0.333rem 1rem rgba(100, 0, 255, 0.15);
  border-radius: 0.666rem;
  width: 12.2rem;
  position: absolute;
  z-index: 3;
  right: -5rem;
  top: 4rem;
`;

export const ProfileUpItem = styled.div`
  width: 100%;
  /* height: 3.333rem; */
  border-bottom: 0.5px solid #6400ff;
  font-family: "SUIT600";
  font-style: normal;
  font-size: 1rem;
  padding: 1.2rem 1.066rem 0.866rem 1.066rem;
`;

export const ProfileItemBox = styled.div`
  padding: 0.4rem;
  width: 100%;
  /* height: 7.066rem; */
`;

export const ProfileItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0.666rem;
  width: 100%;
  /* height: 2.933rem; */
  font-family: "SUIT";
  font-style: normal;
  font-size: 1rem;
  &:hover {
    background: rgba(100, 0, 255, 0.05);
    border-radius: 10px;
    font-weight: 600;
    color: #6400ff;
  }
  cursor: pointer;
`;

export const ProfileDownItem = styled.div`
  width: 100%;
  /* height: 3.333rem; */
  border-top: 0.5px solid #6400ff;
  padding: 0.866rem 1.066rem 1.2rem 1.066rem;
  font-family: "SUIT";
  font-style: normal;
  font-size: 1rem;
  /* color: #c7c7c7; */
  cursor: pointer;
`;

export const NameSpan = styled.span`
  font-family: "SUIT";
  font-style: normal;
  font-size: 1;
`;
