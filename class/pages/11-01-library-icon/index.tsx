import { QuestionCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(QuestionCircleOutlined)`
  color: orange;
  font-size: 50px;
`;
export default function LibraryIconPage() {
  return <MyIcon />;
  // 아이콘에 아이디 사용하는것은 못쓴드아....;
}
