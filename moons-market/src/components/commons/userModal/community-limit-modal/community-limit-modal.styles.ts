import styled from "@emotion/styled";
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
`;
export const Modal = styled.div`
  position: absolute;
  top: 20%;
  left: 35%;
  z-index: 100;
  width: 33.8rem;
  height: 21.4666rem;
  padding: 2rem;
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
  width: 0.755rem;
  height: 2rem;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 0.3rem;
`;
export const Title = styled.h1`
  font-weight: 600;
  margin-top: 1.333rem;
  font-size: 2rem;
  margin-bottom: 0.666rem;
`;
export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 1.333rem;
  color: #7c7c7c;
`;
export const GreenCircle = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  background-color: #2fff66;
  border-radius: 6rem;
  margin-right: 0.666rem;
`;
