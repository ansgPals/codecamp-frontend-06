import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const LIqonBox = styled.div`
  box-shadow: 0px 4px 10px rgba(100, 0, 255, 0.2);
  border-radius: 3.333rem;
  width: 4rem;
  height: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.333rem;
`;
export const LLIcon = styled.div`
  background-image: url("/userModal/question.png");
  width: 1.5rem;
  height: 2rem;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 0.15rem;
`;
export const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  margin-top: 0rem;
  line-height: 1.5rem;
`;
export const PositionRow = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const SubTitle = styled.div`
  color: #c7c7c7;
  font-family: "SUIT400";
  font-size: 1.3rem;
`;
export const BlackButton = styled.button`
  background-color: black;
  width: 8.666rem;
  height: 3.333rem;
  line-height: 3.333rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  border: #e5e5e5 0.0666rem solid;
  font-family: "SUIT400";
  font-size: 1.333rem;
  border-radius: 0.5333rem;
  padding-top: 0.2rem;
  cursor: pointer;
`;
export const CopyIcon = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  background-image: url("/userModal/copy.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 0.2rem;
  margin-right: 0.3rem;
`;
export const URLBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 27.1333rem;
  height: 3.333rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e5e5e5;
  box-shadow: 0px 0.266rem 0.666rem rgba(23, 0, 58, 0.1);
  border-radius: 0.5333rem;
  color: black;
  font-family: "SUIT400";
  font-size: 1rem;
`;
export const LinkText = styled.div`
  width: 16.4666rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 0rem 1rem;
`;
