// 회원가입 약관동의
import Checkbox from "@mui/material/Checkbox";
import * as SignUp from "../SignUp.styles";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CheckboxProps, withStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

const PolicyCheckbox = withStyles({
  root: {
    color: "#c4c4c4",
  },
  checked: { color: "#0fbaa3" },
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default function SignUpPolicy() {
  const [checked, setChecked] = useState([true, true]);

  const handleCheck = (i) => (e) => {
    const newChecked = [...checked];
    newChecked[i] = e.target.checked;
    setChecked(newChecked);
  };

  useEffect(() => {
    setChecked([false, false]);
  }, []);

  return (
    <SignUp.Wrapper>
      <SignUp.HeaderWrapper>
        <SignUp.HeaderTitle>회원가입</SignUp.HeaderTitle>
      </SignUp.HeaderWrapper>
      <SignUp.BodyWrapper>
        <SignUp.BodyTitleWrapper>
          <SignUp.BodyTitle>
            <SignUp.SignUpTitleOn>01 약관동의</SignUp.SignUpTitleOn>
            <SignUp.SignUpTitle>02 정보입력</SignUp.SignUpTitle>
            <SignUp.SignUpTitle>03 가입완료</SignUp.SignUpTitle>
          </SignUp.BodyTitle>
          <SignUp.SignUpTitleUnderBarWrapper>
            <SignUp.SignUpTitleUnderBarOn />
            <SignUp.SignUpTitleUnderBar />
            <SignUp.SignUpTitleUnderBar />
          </SignUp.SignUpTitleUnderBarWrapper>
        </SignUp.BodyTitleWrapper>
        <SignUp.BodyContents>
          <SignUp.PolicyTitleWrapper>
            <PolicyCheckbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
              checked={checked[0]}
              onChange={handleCheck(0)}
            />
            <SignUp.PolicyTitleEssential>[필수]</SignUp.PolicyTitleEssential>{" "}
            <SignUp.PolicyTitle>이용약관</SignUp.PolicyTitle>
          </SignUp.PolicyTitleWrapper>
          <SignUp.PolicyContents />
          <SignUp.PolicyTitleWrapper>
            <PolicyCheckbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
              checked={checked[1]}
              onChange={handleCheck(1)}
            />
            <SignUp.PolicyTitleEssential>[필수]</SignUp.PolicyTitleEssential>{" "}
            <SignUp.PolicyTitle>개인정보 수집 및 이용 동의</SignUp.PolicyTitle>
          </SignUp.PolicyTitleWrapper>
          <SignUp.PolicyContents />
        </SignUp.BodyContents>
        <SignUp.SignUpButton>회원가입</SignUp.SignUpButton>
      </SignUp.BodyWrapper>
    </SignUp.Wrapper>
  );
}
