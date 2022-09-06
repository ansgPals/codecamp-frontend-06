import * as s from "./select.style";
import { useState, MouseEvent, useEffect } from "react";
import { ISelectProps } from "./select.type";
import { v4 as uuidV4 } from "uuid";

export default function SelectBoxComponent(props: ISelectProps) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onClickIsShowOption = () => {
    if (props.disabled) return;
    setIsShow(!isShow);
  };

  const onClickOptionValue = (e: MouseEvent<HTMLDivElement>) => {
    setValue((e.target as HTMLDivElement).innerText);
    setIsShow(false);
    props.setState((e.target as HTMLDivElement).innerText);
  };

  return (
    <s.Div style={{ width: props.width, height: props.height }}>
      {/* selectBox */}
      <s.Select
        onClick={onClickIsShowOption}
        isShow={isShow}
        style={{
          border: !props.disabled
            ? value !== ""
              ? `0.0666rem solid ${props.borderColor}`
              : "none"
            : "none",
          background: !props.disabled ? "#F7F9FB" : "#F0F0F0",
          // ? value !== ""
          //   ? "#F7F9FB"
          //   : props.backgroundColor || "#F7F9FB"
          // : "#F0F0F0",
          // background: : !;
        }}
      >
        <s.InnerName
          style={{
            color: value !== undefined ? "#6400FF" : "#C7C7C7",
            opacity: value === "" && props.opacity && props.opacity,
            fontSize: props.font,
            cursor: !props.disabled ? "pointer" : "none",
          }}
        >
          {value !== undefined ? value : props.title}
          {/* {props.title} */}
        </s.InnerName>
        {!props.disabled && (
          <s.InnerIcon>
            {isShow ? (
              <img
                src="/select/userSelectUp.png"
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <img
                src="/select/userSelectDown.png"
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </s.InnerIcon>
        )}
      </s.Select>
      {/* Option선택 부분 */}
      {isShow && (
        <s.OptionBox>
          {props.arr.map((el: string) => (
            <s.Option
              onClick={onClickOptionValue}
              key={uuidV4()}
              style={{ fontSize: props.font }}
            >
              {el}
            </s.Option>
          ))}
        </s.OptionBox>
      )}
    </s.Div>
  );
}
