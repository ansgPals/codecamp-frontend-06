import styled from "@emotion/styled";

const Button = styled.button`
  height: 21px;
  width: 86px;
  background-color: #6400ff;
  border-radius: 10px;
  border: none;
  font-size: 12px;
  color: white;
  font-weight: 400;
  cursor: pointer;
`;

export default function PurpleFileUploadButton() {
  return (
    <>
      <Button>자료 등록하기</Button>
    </>
  );
}
