import styled from "@emotion/styled";

const BackButton = styled.button`
  width: 3.8rem;
  height: 3.866rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: #ffffff;
  box-shadow: 0.2666rem 0.2666rem 1.9333rem rgba(0, 0, 0, 0.25);
  border-radius: 1.933rem;
  position: absolute;
  margin-top: 3.333rem;
  margin-bottom: 3.333rem;
  margin-right: 75rem;
`;
const Arrow = styled.div`
  margin-top: 0.2rem;
  background-image: url("/main/blackArrow.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 1.8rem;
  width: 1.7rem;
`;

export default function BackButtonComponent() {
  const onClickBack = () => {
    window.history.back();
  };
  return (
    <BackButton onClick={onClickBack}>
      <Arrow />
    </BackButton>
  );
}
