import styled from "@emotion/styled";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";
interface IProps {
  menu?: string;
  title: string;
  prev?: boolean;
  label?: string;
  marginBottom?: number;
}
export default function HeaderTitle(props: IProps) {
  const router = useRouter();
  const menuForms = {
    // 텍스트로 전달이 불가능한 메뉴 (추가 스타일)
    "/community/qnas": `Question<span>&nbsp&&nbsp</span>Answer`,
    "/community/qnas/qnas-write": `Question<span>&nbsp&&nbsp</span>Answer`,
  };

  return (
    <Wrapper style={{ marginBottom: props.marginBottom || "" }}>
      <Menu>
        {menuForms[router.asPath] ? (
          typeof window !== "undefined" && (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(menuForms[router.asPath]),
              }}
            ></div>
          )
        ) : (
          <div>{props.menu}</div>
        )}
      </Menu>
      <TitleWrapper>
        {props.prev && (
          <Prev src="/headerTitle/prev.png" onClick={() => history.back()} />
        )}
        {props.label ? (
          props.label === "해결" ? (
            <Label>{props.label}</Label>
          ) : (
            <NoLabel>{props.label}</NoLabel>
          )
        ) : (
          <div></div>
        )}
        <TitleText>{props.title}</TitleText>
      </TitleWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5.33rem 0 5.4rem 0;
`;
const Menu = styled.div`
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 2.46rem;
    font-family: "SUIT500";
    font-size: 2rem;
    color: #6400ff;
    margin-bottom: 0.66rem;
    span {
      font-family: "SUIT500";
      font-size: 2rem;
      color: black;
    }
  }
  user-select: none;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Prev = styled.img`
  height: 100%;
  cursor: pointer;
  user-select: none;
`;
const Label = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 3.26rem;
  margin: 0 1.33rem;
  padding: 0.4rem 0.666rem;
  background: #ffffff;
  box-shadow: 0px 0px 1rem rgba(100, 0, 255, 0.25);
  border-radius: 0.4rem;
  font-family: "SUIT500";
  font-size: 2rem;
  color: #6400ff;
  user-select: none;
`;

const NoLabel = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 3.26rem;
  margin: 0 1.33rem;
  padding: 0.4rem 0.666rem;
  background: #ffffff;
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.25);
  border-radius: 0.4rem;
  font-family: "SUIT500";
  font-size: 2rem;
  color: #000000;
  user-select: none;
`;

const TitleText = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.33rem;
  margin-bottom: 0;
  font-family: "SUIT700";
  font-size: 2.66rem;
`;
