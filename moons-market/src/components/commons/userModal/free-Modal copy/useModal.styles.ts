import styled from "@emotion/styled";
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Modal = styled.div`
  position: absolute;
  width: 33.8rem;
  height: fit-content;
  padding: 2.9333rem;
  background: #ffffff;
  border-radius: 0.666rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 2rem;
  width: 0.86666rem;
  height: 0.86666rem;
  padding: 0;
  background-color: transparent;
  background-image: url("/userModal/cancle.png");
  background-size: cover;
  border: none;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.333rem 5.533rem 1.333rem 5.533rem;
`;
export const LIqonBox = styled.div`
  box-shadow: 0px 0.2666rem 0.666rem rgba(0, 0, 0, 0.1);
  border-radius: 3.333rem;
  width: 4rem;
  height: 4rem;
  margin-top: 1.333rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LLIcon = styled.div`
  background-image: url("/userModal/exclamation.png");
  width: 0.455rem;
  height: 2rem;
  background-size: cover;
`;
