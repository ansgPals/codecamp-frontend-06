import * as s from "./signUpSelect.style";
import { useState, MouseEvent, useEffect } from "react";
import { ISelectProps } from "./select.type";
import { v4 as uuidV4 } from "uuid";

export default function SignUpSelectBoxComponent(props: ISelectProps) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (props.reset === true) {
      setValue("");
    }
  }, [props.reset]);

  const onClickIsShowOption = () => {
    if (props.disabled) return;
    setIsShow(!isShow);
  };

  const onClickOptionValue = (e: MouseEvent<HTMLDivElement>) => {
    setValue((e.target as HTMLDivElement).innerText);
    setIsShow(false);
    props.setState((e.target as HTMLDivElement).innerText);
  };

  const styles = {
    border: "1px solid #C7C7C7",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    background: "#FFFFFF",
    padding: "0",
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
              ? "1px solid #C7C7C7"
              : `1px solid ${props.borderColor}`
            : "none",
          background: !props.disabled
            ? value !== ""
              ? "#fff"
              : props.backgroundColor || "#F7F9FB"
            : "#F0F0F0",
        }}
      >
        <s.InnerName
          style={{
            color:
              value !== "" ? "black" : props.color ? props.color : "#C7C7C7",
            opacity: value === "" && props.opacity && props.opacity,
          }}
        >
          {value !== "" ? value : props.title}
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
                src="/signUp/selectBox.png"
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </s.InnerIcon>
        )}
      </s.Select>
      {/* Option선택 부분 */}
      {isShow && (
        <s.OptionBox style={styles}>
          {props.arr.map((el: string) => (
            <s.Option onClick={onClickOptionValue} key={uuidV4()}>
              {el}
            </s.Option>
          ))}
        </s.OptionBox>
      )}
    </s.Div>
  );
}
