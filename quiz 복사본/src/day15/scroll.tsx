import styled from "@emotion/styled";

const Cal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Row = styled.div`
  width: 300px;
  height: 20px;
  font-size: 15px;
  background-color: white;
`;

export default function ScrollList(props) {
  return (
    <Cal key={props.el._id}>
      <Row>{props.el._id}</Row>
      <Row>{props.el.title}</Row>
      <Row>{props.el.contents}</Row>
    </Cal>
  );
}
