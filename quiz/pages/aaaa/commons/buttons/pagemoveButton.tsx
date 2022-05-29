import styled from "@emotion/styled";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 39px;
  background: #6400ff;
  margin-left: 10px;
  box-shadow: 0px 4px 10px rgba(100, 0, 255, 0.15);
  border-radius: 10px;
  cursor: pointer;
`;
const Up = styled(UpOutlined)`
  color: white;
  font-size: 20px;
`;
const Down = styled(DownOutlined)`
  color: white;
  font-size: 20px;
`;

export default function PageMoveButton() {
  return (
    <Row>
      <Button>
        <Up></Up>
      </Button>
      <Button>
        <Down></Down>
      </Button>
    </Row>
  );
}
