import { useState } from "react";
import {
  Body,
  Wrapper,
  HeaderTitle,
  Inputbox,
  ErrorMsg,
  PhoneWrapper,
  PhoneNum,
  Token,
  TokenButton,
  TokenTimer,
  TokenTimerConfirmButton,
  TokenWrapper,
  Location,
  GenderWrapper,
  Gender,
  SignupButton,
  LocationWrapper,
} from "../../styles/final.js";

export default function JoinState() {
  const [email, setEmail] = useState("");
  const [emailOk, setEmailOk] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordOk, setPasswordOk] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const email = document.getElementById("email").value;
  // const writer = document.getElementById("writer").value;
  // const password1 = document.getElementById("password1").value;
  // const password2 = document.getElementById("password2").value;
  // const location = document.getElementById("location").value;
  // const genderWoman = document.getElementById("gender__woman").checked;
  // const genderMan = document.getElementById("gender__man").checked;

  function onChangeEmail(e) {
    console.log(e.target.value);
    // event.target       => 태그전체 <input type="text" ...
    // event.target.value => 우리가 입력한 값 a@a.com
    setEmail(e.target.value);
  }

  function onChangePassword1(e) {
    console.log(e.target.value);
    setPassword1(e.target.value);
  }

  function onChangePassword2(e) {
    console.log(e.target.value);
    setPassword2(e.target.value);
  }

  function SignUp() {
    if (email.includes("@") === false) {
      // alert("이메일이 올바르지 않습니다!! @가 없음!!")
      setEmailError("이메일이 올바르지 않습니다!! @가 없음!!");
    } else if (password1 !== password2) {
      setPasswordError("비밀번호가 같지 않습니다. 다시 확인해주세요.");
    } else {
      alert("가입을 축하합니다!");
      setEmailError("");
      setPasswordError("");
    }
  }
  return (
    <Body>
      <Wrapper>
        <HeaderTitle>코드캠프 회원가입</HeaderTitle>

        <Inputbox
          id="email"
          type="text"
          placeholder="이메일을 입력해 주세요."
          onChange={onChangeEmail}
        />
        <ErrorMsg>{emailError}</ErrorMsg>

        {/* <Inputbox id="writer" type="text" placeholder="이름을 입력해 주세요." />
        <ErrorMsg id="error__writer"></ErrorMsg> */}

        <Inputbox
          id="password1"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          onChange={onChangePassword1}
        />
        <ErrorMsg></ErrorMsg>

        <Inputbox
          id="password2"
          type="password"
          placeholder="비밀번호를 다시 입력해 주세요."
          onChange={onChangePassword2}
        />
        <ErrorMsg>{passwordError}</ErrorMsg>

        <PhoneWrapper>
          <PhoneNum
            id="phone1"
            type="text"
            onchange="changePhone1()"
            onkeyup="onchange()"
          />{" "}
          -
          <PhoneNum
            id="phone2"
            onchange="changePhone2()"
            onkeyup="onchange()"
          />{" "}
          -
          <PhoneNum
            id="phone3"
            onchange="changePhone3()"
            onkeyup="onchange()"
          />
        </PhoneWrapper>

        <TokenWrapper>
          <Token id="token">000000</Token>
          <TokenButton id="token__button" onclick="getToken()" disabled>
            인증번호 전송
          </TokenButton>
        </TokenWrapper>

        <TokenWrapper>
          <TokenTimer id="token__timer">3:00</TokenTimer>
          <TokenTimerConfirmButton
            id="token__timer__confirm__button"
            onclick="getTokenTimerConfirm()"
            disabled
          >
            인증 완료
          </TokenTimerConfirmButton>
        </TokenWrapper>

        <LocationWrapper>
          <Location id="location">
            {/* <option disabled selected>
              지역을 선택하세요.
            </option>
            <option>서울</option>
            <option>경기</option>
            <option>인천</option> */}
          </Location>
        </LocationWrapper>
        <ErrorMsg id="error__location"></ErrorMsg>
        <GenderWrapper>
          <Gender>
            <input type="radio" name="gender" id="gender__woman" /> 여성
          </Gender>
          <Gender>
            <input type="radio" name="gender" id="gender__man" /> 남성
          </Gender>
        </GenderWrapper>
        <ErrorMsg id="error__gender"></ErrorMsg>

        <div>
          <SignupButton onClick={SignUp}>가입하기</SignupButton>
        </div>
      </Wrapper>
    </Body>
  );
}
