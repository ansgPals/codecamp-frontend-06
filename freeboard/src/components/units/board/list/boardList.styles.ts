import styled from "@emotion/styled";

export const BackGround = styled.div`
  width: 1920px;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
export const ListBox = styled.div`
  width: 1200px;
  height: 583px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  border-top: 2px solid pink;
  border-bottom: 2px solid pink;
`;

export const Row = styled.div`
  width: 1200px;
  height: 583px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px pink solid;
  align-items: center;
  background-color: transparent;
`;
export const Cal1 = styled.div`
  width: 100px;
  height: 51px;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
`;
export const Cal2 = styled.div`
  width: 300px;
  height: 51px;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
`;
export const Cal3 = styled.button`
  width: 400px;
  height: 51px;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  border: 0px;
  background-color: transparent;
  :hover {
    color: blue;
    background-color: azure;
  }
`;
export const Cal4 = styled.div`
  width: 180px;
  height: 51px;
  font-size: 18px;
  text-align: center;

  line-height: 50px;
`;
export const Cal5 = styled.div`
  width: 110px;
  height: 51px;
  font-size: 18px;
  text-align: center;

  line-height: 50px;
`;
export const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 50px;
`;

export const BoardPageNumberBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 600px;
`;

export const PageNumber = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  margin: 5px;
  border: none;
  background-color: white;
`;

export const PagePrevButton = styled.button`
  font-size: 20px;
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const PageNextButton = styled.button`
  font-size: 20px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const WriteBoardButton = styled.button`
  margin-left: 1000px;
  width: 110px;
  height: 51px;
  font-size: 22ps;
  text-align: center;
  line-height: 45px;
  background-color: #fff7e3;
  border-radius: 20px;
  border: pink 5px solid;

  cursor: pointer;
  :hover {
    background-color: pink;
  }
`;

export const CatTitle = styled.div`
  height: 100px;
  width: 400px;
  background-color: white;
  text-align: center;
  font-size: 30px;
  line-height: 80px;
  border-radius: 50px;
  border: 12px solid pink;
  margin-bottom: 20px;
  margin-right: 500px;
`;
