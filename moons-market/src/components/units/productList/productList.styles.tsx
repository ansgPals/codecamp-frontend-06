import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

export const BackGround = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
export const ListBox = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
  flex-direction: row;
  width: 1300px;
  min-height: 800px;
  margin: 100px;
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1200px;
  justify-content: center;
  align-items: center;
`;
export const MyCard = styled(Card)`
  margin: 15px;
  height: 300px;
  width: 250px;
  cursor: pointer;
`;
export const CardImage = styled.img`
  height: 150px;
  width: 250px;
  margin: 15px;
  background-image: url("/랜딩.webp");
`;

export const ProductName = styled(Typography)`
  height: 30px;
`;
export const ProductInfo = styled(Typography)`
  background-color: azure;
  height: 50px;
`;
export const CardButton = styled(CardActions)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 15px;
  width: 250px;
  background-color: aqua;
`;
