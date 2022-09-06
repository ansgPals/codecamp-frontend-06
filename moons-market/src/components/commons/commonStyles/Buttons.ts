import styled from "@emotion/styled";

const DefaultButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  user-select: none;
  cursor: pointer;
`;
interface IProps {
  isActive?: boolean;
  text?: string;
}
export const WhiteButton = styled(DefaultButton)`
  min-width: fit-content;
  height: 2.06rem;
  background: #ffffff;
  box-shadow: 0rem 0.33rem 0.23rem rgba(23, 0, 58, 0.12);
  border-radius: 0.26rem;
  font-family: "SUIT500";
  font-size: 1rem;
  ${(props: IProps) =>
    props.text === "글쓰기" && {
      width: "6.33rem",
      height: "2.46rem",
      border: "1px solid #E5E5E5",
      boxShadow: "0rem 0.26rem 0.66rem rgba(23, 0, 58, 0.1)",
      borderRadius: "0.4rem",
      fontSize: "1.33rem",
    }}
  ${(props: IProps) =>
    props.text === "수정하기" && {
      width: "6rem",
      height: "2.46rem",
      border: "1px solid #000000",
      borderRadius: "0.4rem",
      boxShadow: "0 0 0",
      fontSize: "1.33rem",
    }}
  ${(props: IProps) =>
    props.text === "등록" && {
      width: "4.86rem",
      minWidth: "fit-content",
      height: "3.4rem",
      border: "1px solid #6400FF",
      borderRadius: "0.66rem",
      fontSize: "1.53rem",
      fontFamily: "SUIT",
      color: "#6400FF",
    }}
  ${(props: IProps) =>
    props.text === "답글" && {
      width: "4.86rem",
      minWidth: "fit-content",
      height: "3.4rem",
      border: "1px solid #000000",
      borderRadius: "0.66rem",
      fontSize: "1.53rem",
      fontFamily: "SUIT",
    }}
  ${(props: IProps) =>
    props.isActive &&
    props.text === "답글" && {
      minWidth: "fit-content",
      border: "1px solid #6400FF",
      color: "#6400FF",
    }}
  img {
    width: 1.13rem;
    height: 1.13rem;
    margin-right: 0.33rem;
  }
`;

export const LightGrayPurpleButton = styled(DefaultButton)`
  width: 22.6rem;
  height: 2.53rem;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e5e5e5;
  box-shadow: 0rem 0.26rem 0.66rem rgba(23, 0, 58, 0.1);
  border-radius: 0.53rem;
  &:hover {
    background: #6400ff;
    border: 1px solid #e5e5e5;
    box-shadow: 0rem 0.33rem 1rem rgba(100, 0, 255, 0.15);
    font-family: "SUIT600";
    color: #ffffff;
  }
  width: ${(props: IProps) => props.text === "채널톡 문의하기" && "27.13rem"};
  height: ${(props: IProps) => props.text === "채널톡 문의하기" && "3.33rem"};
  font-size: ${(props: IProps) =>
    props.text === "채널톡 문의하기" && "1.33rem"};
`;

export const WhitePurpleButton = styled(DefaultButton)`
  width: 27.1333rem;
  height: 3.33rem;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0rem 0.26rem 0.66rem rgba(23, 0, 58, 0.1);
  border-radius: 0.53rem;
  font-family: "SUIT";
  font-size: 1.33rem;
  &:hover {
    background: #6400ff;
    box-shadow: 0rem 0.33rem 1rem rgba(100, 0, 255, 0.15);
    font-family: "SUIT600";
    color: #ffffff;
  }
  min-width: fit-content;
`;
// 채널톡 문의하기 버튼 안에 사용
export const GreenIcon = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  background: #2fff66;
  border-radius: 100%;
  margin-right: 0.66rem;
`;
export const GrayWhiteButton = styled(DefaultButton)`
  width: 23.53rem;
  height: 3.86rem;
  background: #f0f0f0;
  border-radius: 1.93rem;
  font-size: 1.33rem;
  img {
    margin-left: 0.66rem;
  }
  &:hover {
    background: #ffffff;
    border: 1px solid #6400ff;
    box-shadow: 0rem 0.33rem 1rem rgba(100, 0, 255, 0.15);
    color: #6400ff;
    font-family: "SUIT";
    font-weight: 600;
  }
`;

export const PurpleButton = styled(DefaultButton)`
  width: 27.13rem;
  height: 3.33rem;
  background: #6400ff;
  border: 1px solid #e5e5e5;
  box-shadow: 0rem 0.33rem 1rem rgba(100, 0, 255, 0.15);
  border-radius: 0.53rem;
  font-family: "SUIT";
  font-weight: 600;
  font-size: 1.33rem;
  color: #ffffff;
  ${(props: IProps) =>
    props.text === "적용하기" && {
      width: "6rem",
      height: "2.46rem",
      borderRadius: "0.4rem",
      fontWeight: "500",
      fontSize: "1.33rem",
      boxShadow: "none",
    }}

  ${(props: IProps) =>
    props.text === "미니홈피 방문하기" && {
      width: "12.13rem",
      height: "2.46rem",
      borderRadius: "0.4rem",
      fontWeight: "500",
      fontSize: "1.33rem",
      boxShadow: "none",
    }}
      ${(props: IProps) =>
    props.text === "오프라인" && {
      width: "15.2rem",
      height: "3.4666rem",
      borderRadius: "1rem",
      fontWeight: "600",
      fontSize: "1.2rem",
      boxShadow: "none",
      border: "none",
    }}
  &:hover {
    box-shadow: ${(props: IProps) =>
      props.text === "미니홈피 방문하기"
        ? "none"
        : "0rem 0.33rem 1rem rgba(100, 0, 255, 0.15)"};
  }
`;

export const GrayWhitePurpleButton = styled(DefaultButton)`
  width: 33.33rem;
  height: 3.33rem;
  background: #f0f0f0;
  border: 1px solid #c7c7c7;
  border-radius: 0.53rem;
  font-family: "SUIT";
  font-size: 1.33rem;
  color: #7c7c7c;
  pointer-events: none;
  ${(props: IProps) =>
    props.isActive && {
      backgroundColor: "#FFFFFF",
      borderColor: "#E5E5E5",
      boxShadow: "0rem 0.26rem 0.66rem rgba(23, 0, 58, 0.1)",
      color: "#000000",
      pointerEvents: "auto",
    }};
  ${(props: IProps) =>
    props.text === "비밀번호 변경" && {
      width: "7.13rem",
      height: "2.06rem",
      borderColor: "#f0f0f0",
      borderRadius: "0.26rem",
      fontSize: "1rem",
      fontWeight: "500",
    }};
  color: ${(props: IProps) =>
    !props.isActive && props.text === "비밀번호 변경" && "#ffffff"};
  &:hover {
    background: #6400ff;
    border: 1px solid #e5e5e5;
    box-shadow: 0rem 0.33rem 1rem rgba(100, 0, 255, 0.15);
    font-family: "SUIT600";
    color: #ffffff;
  }
`;
export const RedButton = styled(DefaultButton)`
  width: 6rem;
  height: 2.46rem;
  background: #ff0000;
  border-radius: 0.4rem;
  font-family: "SUIT500";
  font-size: 1.33rem;
  color: #ffffff;
`;
