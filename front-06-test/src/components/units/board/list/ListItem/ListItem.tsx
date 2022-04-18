import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { getDate } from "../../libraries/util";

export const ListBox = styled.div`
  width: 764px;
  height: fit-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0px;
  cursor: pointer;
`;

export const Row = styled.div`
  padding: 10px;
  margin: 10px;
  width: 680px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Cal1 = styled.div`
  width: 400px;
  height: 51px;
  font-size: 18px;
  text-align: start;
  line-height: 50px;
  margin-left: 20px;
`;
export const Cal2 = styled.div`
  font-size: 18px;
  color: #999999;
  width: 160px;
  text-align: start;
`;

export default function ListItem(props) {
  const router = useRouter();
  const onClickGoBoard = (event) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };
  return (
    <>
      <ListBox id={props.el._id} onClick={onClickGoBoard}>
        <Row key={props.el._id}>
          <Cal1>{props.el.title.slice(0, 20)}</Cal1>
          <Cal2>{getDate(props.el.createdAt)}</Cal2>
        </Row>
      </ListBox>
    </>
  );
}
