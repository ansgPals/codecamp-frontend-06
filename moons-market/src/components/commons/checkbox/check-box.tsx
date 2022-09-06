import styled from "@emotion/styled";
import { CheckboxProps, withStyles } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import { MouseEventHandler } from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const PolicyCheckbox = withStyles({
  root: {
    color: "none",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  checked: { color: "white" },
  disabled: { disabled: false },
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);
interface IProps {
  disabled?: boolean;
}
const Checked = styled.div`
  width: 1.333rem;
  height: 1.333rem;
  border-radius: 0.333rem;
  :hover {
    background-color: transparent;
  }
  background-color: ${(props: IProps) =>
    props.disabled ? "#c4c4c4" : "#6400FF"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const UnChecked = styled.div`
  width: 1.333rem;
  height: 1.333rem;
  border: 0.066rem solid #7c7c7c;
  border-radius: 0.333rem;
  :hover {
    background-color: transparent;
  }
`;
const Iqon = styled(CheckRoundedIcon)`
  width: 1.2rem;
  height: 1.2rem;
  margin-bottom: 0.066rem;
  color: white;
`;
export default function CheckBoxComponent({
  onClickEvent,
  checked,
  disabled,
}: {
  onClickEvent?:
    | ((...args: any) => () => void)
    | MouseEventHandler<HTMLButtonElement>;
  checked: true | false;
  disabled?: boolean;
}) {
  return (
    <PolicyCheckbox
      icon={<UnChecked />}
      checkedIcon={
        <Checked disabled={disabled}>
          <Iqon />
        </Checked>
      }
      checked={checked}
      onClick={onClickEvent}
      disabled={disabled}
    />
  );
}
