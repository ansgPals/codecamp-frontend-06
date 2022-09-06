import * as s from "./qnaDetailSelectBox.styles";
import { useState, MouseEvent } from "react";
import { useRouter } from "next/router";
import { IQnADetailSelectProps } from "./select.type";
import { v4 as uuidV4 } from "uuid";
import { useMutation } from "@apollo/client";
import {
  FETCH_QNA_BY_ID,
  UPDATE_QNA,
} from "../../units/community/qna/detail/qnaDetail.querys";
import {
  IMutation,
  IMutationUpdateQnAArgs,
} from "../../../commons/types/generated/types";

// const TOGGLE_QNA_STATUS = gql`
//   mutation toggleQnAStatus($qnaId: String!) {
//     toggleQnAStatus(qnaId: $qnaId) {
//       id

//     }
//   }
// `

export default function SelectDetailBoxComponent(props: IQnADetailSelectProps) {
  const router = useRouter();

  const [updatQnASolve] = useMutation<
    Pick<IMutation, "updateQnA">,
    IMutationUpdateQnAArgs
  >(UPDATE_QNA);

  const [isShow, setIsShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const onClickIsShowOption = () => {
    setIsShow(!isShow);
  };

  const onClickOptionValue = async (e: MouseEvent<HTMLDivElement>) => {
    setValue((e.target as HTMLDivElement).innerText);
    setIsShow(false);
    if (props.setState) {
      props.setState((e.target as HTMLDivElement).innerText);
    }

    try {
      await updatQnASolve({
        variables: {
          qnaId: String(router.query.id),
          updateQnAInput: {
            userId: String(props.userId),
            lectureId: props.lectureId,
            subCategory: props.subCategory,
            solved: (e.target as HTMLDivElement).innerText === "해결",
          },
        },
        refetchQueries: [
          {
            query: FETCH_QNA_BY_ID,
            variables: {
              qnaId: String(router.query.id),
            },
          },
        ],
      });
      alert("성공");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <s.Div style={{ width: props.width, height: props.height }}>
      {/* selectBox */}
      <s.Select
        onClick={onClickIsShowOption}
        style={{
          border:
            value === "미해결" || props.title === "미해결"
              ? "1px solid #000"
              : "1px solid #6400FF",
        }}
      >
        <s.InnerName
          style={{
            color: (value === "미해결" || props.title === "미해결") && "#000",
          }}
        >
          {value !== "" ? value : props.title}
        </s.InnerName>

        <s.InnerIcon>
          {isShow ? (
            <img
              src={
                value === "미해결" || props.title === "미해결"
                  ? "/select/blackUp.png"
                  : "/select/userSelectUp.png"
              }
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <img
              src={
                value === "미해결" || props.title === "미해결"
                  ? "/select/blackDown.png"
                  : "/select/userSelectDown.png"
              }
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </s.InnerIcon>
      </s.Select>
      {/* Option선택 부분 */}
      {isShow && (
        <s.OptionBox>
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
