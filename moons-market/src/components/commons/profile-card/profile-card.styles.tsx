import styled from "@emotion/styled";
import { GrayWhiteButton } from "../commonStyles/Buttons";

export const PositionColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const PositionRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NickNaem = styled.div`
  line-height: 2rem;
  font-family: "SUIT700";
  font-size: 2rem;
  margin-right: 1.13rem;
`;
export const Authority = styled.div`
  height: 2.06rem;
  padding: 0rem 0.46rem;
  background-color: black;
  color: #ffe000;
  text-align: center;
  border-radius: 0.33rem;
  font-size: 1.333rem;
  margin-right: 0.666rem;
`;
interface IBackProps {
  level?: string;
  isMyData?: boolean;
}
export const UserLevel = styled.div`
  height: 2.06rem;
  padding: 0rem 0.46rem;
  background-color: ${(props: IBackProps) =>
    props.level === "초급자"
      ? "#A76EFF"
      : props.level === "실무자"
      ? "#6400FF"
      : props.level === "입문자"
      ? "#ffe000"
      : "black"};
  color: white;
  text-align: center;
  border-radius: 0.33rem;
  font-size: 1.333rem;
`;
export const ImgGray = styled.img`
  width: 20.4rem;
  height: 13.4rem;
  background-color: #f0f0f0;
  border-radius: 0.333rem;
  margin-top: 1.333rem;
`;
export const GrayBox = styled.div`
  width: 20.4rem;
  height: 13.4rem;
  background-color: #f0f0f0;
  border-radius: 0.333rem;
  margin-top: 1.333rem;
`;
export const FollowTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-family: "SUIT400";
  margin-top: 0.866rem;
  font-size: 1.2666rem;
`;
export const FollowNumber = styled.div`
  font-family: "SUIT500";
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 0.866rem;
`;
export const GrayBar = styled.div`
  height: 1.466rem;
  width: 0.2rem;
  background-color: #e5e5e5;
  border-radius: 0.2rem;
  margin-top: 2.6rem;
`;
export const Arrow = styled.div`
  width: 3.73rem;
  height: 3.73rem;
  margin-left: -3.7rem;
  background-color: none;
  background-image: url("/profile-card/arrow.png");
  background-size: contain;
  background-repeat: no-repeat;
`;
export const Iqon = styled.div`
  background-image: url("/profile-card/Vector.png");
  cursor: pointer;
  width: 1.26rem;
  height: 1.26rem;
  background-size: contain;
  margin-top: 0px;
  margin-left: 21rem;
`;
export const MediaTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 7.333rem;
  height: 2rem;
  margin-bottom: 0.666rem;
`;
export const MediaTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "SUIT400";
  font-size: 1.6666rem;
  line-height: 2rem;
  color: #6400ff;
`;
export const Dot = styled.div`
  width: 0.333rem;
  height: 0.333rem;
  margin-right: 0.666rem;

  line-height: 1.666rem;
  background-color: #6400ff;
  border-radius: 50%;
`;
export const UrlText = styled.a`
  max-width: 14.6rem;
  color: #767676;
  font-family: "SUIT400";
  text-decoration-line: underline;
  height: 2rem;
  line-height: 2rem;
  margin-bottom: 0.666rem;
  :hover {
    color: #767676;
    text-decoration-line: underline;
  }
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const NoAccountBox = styled.div`
  width: 19.9rem;
  height: 10.2rem;
  border-radius: 0.666rem;
  background-color: ${(props: IBackProps) =>
    props.isMyData ? "white" : "#F7F9FB"};
  border: 1px #6400ff solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NoAccountText = styled.div`
  font-size: 1rem;
  font-family: "SUIT500";
  color: ${(props: IBackProps) => (props.isMyData ? "black" : " #C7C7C7")};
`;
export const NoAccountButton = styled(GrayWhiteButton)`
  width: 13.133rem;
  height: 2.533rem;
  font-size: 0.933rem;
  margin-top: 1rem;
  user-select: none;
  cursor: pointer;
`;
export const GoMiniHompButton = styled.button`
  width: 12.133rem;
  height: 2.466rem;
  background-color: #6400ff;
  border: none;
  border-radius: 0.4rem;
  font-size: 1.333rem;
  color: white;
  font-family: "SUIT500";
  margin-left: 10rem;
  cursor: pointer;
`;
