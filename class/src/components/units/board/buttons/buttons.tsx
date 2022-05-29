import styled from "@emotion/styled";
import { ButtonForm } from "./button.from";

export default function ButtonPage({
  title,
  styles,
  onClickEvent,
  disable,
}: {
  title: string;
  styles?: {
    [key: string]: string | number;
  };
  onClickEvent?: (...args: any) => void;
  disable?: boolean;
}) {
  let buttonStyles: {
    [key: string]: string | number;
  } = title && !disable ? ButtonForm[title] : {};

  if (styles) {
    buttonStyles = { ...buttonStyles, ...styles };
  }

  return (
    // 아래처럼 사용하면됨
    // <ButtonPage title="삭제하기" />
    // <ButtonPage title="저장하기" />
    // <ButtonPage title="+ 강좌등록" />
    // <ButtonPage title="삭제" />
    // <ButtonPage title="보기" />
    // <ButtonPage title="등록하기" />
    // <ButtonPage title="환불하기" />
    // <ButtonPage title="환불완료" disable />
    // <ButtonPage title="파일선택" />
    // <ButtonPage title="자료 등록하기" />

    <Button
      style={buttonStyles}
      onClick={(onClickEvent && onClickEvent) || undefined}
      disabled={disable || false}
    >
      {title}
    </Button>
  );
}

const Button = styled.button`
  padding: 0px 10px;
  background-color: ${(props) => props.disabled && "#E5E5E5"};
  color: white;
  border-radius: 11px;
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
  font-size: 14px;
  font-weight: 400;
  border: ${(props) => props.disabled && "none"};
  height: 29px;
  line-height: 29px;
`;
