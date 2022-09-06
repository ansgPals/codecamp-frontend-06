import styled from "@emotion/styled";
import { IChoiceProps, IChoiceStylesProps } from "./choice.types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 4.8666rem;
  height: 3px;
`;

const Img = styled.img`
  width: 1.333rem;
  height: 1.333rem;
  position: absolute;
  top: -0.333rem;
  left: -0.5333rem;
  z-index: 1;
`;

const Choice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0.666rem 0 0;
  width: 4.8666rem;
  height: 3rem;
  line-height: 3rem;
  background: ${(props: IChoiceStylesProps) =>
    props.isChoice ? "rgba(100, 0, 255, 0.05)" : "#F7F9FB"};
  border: ${(props: IChoiceStylesProps) =>
    props.isChoice ? "0.0666rem solid #6400FF" : "none"};
  border-radius: 0.4rem;
  font-family: "SUIT";
  font-style: normal;
  font-weight: ${(props: IChoiceStylesProps) =>
    props.isChoice ? "600" : "400"};
  font-size: 1.333rem;
  color: ${(props: IChoiceStylesProps) =>
    props.isChoice ? "#6400FF" : "#7c7c7c"};
  cursor: pointer;
`;

export default function LevelChoice(props: IChoiceProps) {
  const onClickSelectLevel = () => {
    const arr = Array(props.checkArr.length).fill(false);
    arr[props.index] = !arr[props.index];
    props.setCheckArr(arr);
  };

  return (
    <Wrapper onClick={onClickSelectLevel}>
      {props.checkArr[props.index] && <Img src="/levelChoice/check.png" />}
      <Choice isChoice={props.checkArr[props.index]}>{props.title}</Choice>
    </Wrapper>
  );
}
