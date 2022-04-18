import {
  MessageOutlined,
  UnorderedListOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

const Wrapper = styled.div`
  height: 708px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  margin: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 5px;
`;
const NaviTitleBox = styled.div`
  width: 170px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-bottom: #e5e5e5 solid 1px;
  margin-bottom: 10px;
`;
const NaviIkon = styled(MessageOutlined)`
  color: #6400ff;
  margin: 5px;
`;
const NaviTitle = styled.div`
  font-size: 16px;
`;
const Navi1 = styled.div`
  width: 170px;
  height: 30px;
  font-size: 14px;
  color: ${(props: ButtonProps) => (props.isActive ? "#000000" : "#999999")};
  cursor: pointer;
  text-align: center;
  line-height: 28px;
  border-radius: 15px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
const Navi2 = styled.div`
  width: 170px;
  height: 30px;
  font-size: 14px;
  color: ${(props: ButtonProps) => (props.isActive ? "#000000" : "#999999")};
  cursor: pointer;
  text-align: center;
  line-height: 28px;
  border-radius: 15px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
const ListIkon = styled(UnorderedListOutlined)`
  color: ${(props: ButtonProps) => (props.isActive ? "#6400ff" : "#999999")};

  margin: 0px 15px;
  line-height: 30px;
`;
const NewIkon = styled(PlusSquareOutlined)`
  color: ${(props: ButtonProps) => (props.isActive ? "#6400ff" : "#999999")};
  margin: 0px 15px;
  line-height: 30px;
`;
interface ButtonProps {
  isActive: boolean;
}
export default function LayOutNavigation() {
  const [listActive, setListActive] = useState(true);
  const [newActive, setNewActive] = useState(false);
  const router = useRouter();
  const GOGO = (event: any) => {
    router.push(`/${event.target.id}`);
    if (event.target.id === "") {
      setListActive(true);
      setNewActive(false);
    } else {
      setListActive(false);
      setNewActive(true);
    }
  };
  return (
    <Wrapper>
      <NaviTitleBox>
        <NaviIkon></NaviIkon>
        <NaviTitle>TALKR</NaviTitle>
      </NaviTitleBox>
      <Navi1 id={""} onClick={GOGO} isActive={listActive}>
        <ListIkon isActive={listActive}></ListIkon> 전체글보기
      </Navi1>
      <Navi2 id={"boards/new"} onClick={GOGO} isActive={newActive}>
        <NewIkon isActive={newActive}></NewIkon>새 글 작성
      </Navi2>
    </Wrapper>
  );
}
