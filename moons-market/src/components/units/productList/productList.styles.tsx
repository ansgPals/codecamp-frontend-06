import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { CardContent } from "@mui/material";

export const BackGround = styled.div`
  padding-top: 100px;
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
  min-height: 800px;
  margin: 100px;
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  padding: 0px 15vw;
  justify-content: center;
  align-items: center;
`;
export const MyCard = styled(Card)`
  margin: 15px;
  height: 300px;
  width: 250px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 4px 20px gray;
  }
`;
export const SerchBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: fit-content;
  justify-content: center;
  align-items: center;
  color: #ff9500;
  margin-bottom: 20px;
`;
export const SerchDiv = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const SearchInput = styled.input`
  padding: 0px 25px;
  width: 600px;
  height: 60px;
  background-color: white;
  text-align: start;
  font-size: 30px;
  line-height: 80px;
  border: 6px solid #ff9500;
  /* margin-left: 300px; */
  margin-bottom: 20px;
  :focus {
    color: #ffc16a;
  }
`;
interface IProps {
  isMatched: boolean;
}
export const SearchWord = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "#f542b0" : "black")};
`;
export const MyCardContent = styled(CardContent)`
  .MuiTypography-root {
    background-color: white;
  }
`;
export const CardImage = styled.img`
  height: 150px;
  width: 250px;
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
`;
