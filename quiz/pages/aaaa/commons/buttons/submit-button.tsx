import styled from "@emotion/styled";

const Button = styled.button`
  height: 44px;
  width: 280px;
  background-color: #6400ff;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

export default function SubmitButton() {
  return (
    <>
      <Button>등록하기</Button>
    </>
  );
}
