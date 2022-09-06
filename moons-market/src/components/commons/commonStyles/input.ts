import styled from "@emotion/styled";

export const Input = styled.input`
  padding: 10px;
  box-sizing: border-box;
  background: #f7f9fb;
  border-radius: 6px;
  border: none;
  outline: none;
  &:focus {
    border: 1px solid #6400ff;
    background: #fff;
    ::placeholder {
      color: transparent;
    }
  }
  ::placeholder {
    color: #c7c7c7;
  }
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 1.333rem;
`;
