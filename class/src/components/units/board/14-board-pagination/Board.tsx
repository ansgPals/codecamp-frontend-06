import styled from "@emotion/styled";

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const MyCal = styled.div``;

export default function Board(props) {
  return (
    <>
      {props.data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyCal>{el.writer}</MyCal>
          <MyCal>{el.title}</MyCal>
        </MyRow>
      ))}
    </>
  );
}
