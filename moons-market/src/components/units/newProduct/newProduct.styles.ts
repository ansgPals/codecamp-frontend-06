import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const BackGround = styled.div`
  margin-top: 30px;
  width: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  margin-bottom: 30px;
`;
export const MyTitle = styled.div`
  margin-top: 30px;
  width: 700px;
  height: 53px;
  font-size: 25px;
  border-bottom: 3px solid #7bd778;
`;

export const MyBody = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 80px;
`;

export const BackTop = styled.div`
  height: 90px;
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TopLt = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const MyErr = styled.div`
  color: red;
`;
export const MyName = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: black;
  width: 400px;
  height: 30px;
  line-height: 30px;
`;
export const PutName = styled.input`
  font-size: 16px;

  border: 3px solid #ffdb86;
  width: 500px;
  height: 52px;
  margin-top: 12px;
  border-radius: 15px;
  padding-left: 10px;
`;

export const TopRt = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const PutPass = styled.input`
  font-size: 16px;

  border: 3px solid #ffdb86;
  width: 500px;
  height: 52px;
  margin-top: 12px;
  border-radius: 15px;
  padding-left: 10px;
`;

export const TitleBox = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const PutTitle = styled.input`
  font-size: 16px;

  border: 3px solid #ffdb86;
  width: 500px;
  height: 52px;
  margin-top: 12px;
  border-radius: 15px;
  padding-left: 10px;
`;
export const TextBox = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Editor = styled(ReactQuill)`
  .ql-editor {
    height: 300px;
    width: 600px;
  }
  .ql-toolbar {
    background-color: #ffdb86;
    border: 3px solid #ffdb86;
    border-radius: 15px;
  }

  .ql-container {
    border: 3px solid #ffdb86;
    border-radius: 15px;
    font-size: 20px;
  }
`;
// export const PutText = styled.input`
//   font-size: 16px;
//   color: #c4c4c4;
//   border: 3px  solid #ffdb86;
//   width: 600px;
//   min-height: 200px;
//   margin-top: 12px;
//   border-radius: 15px;
//   padding-left: 10px;
// `;

export const PhotoBox = styled.div`
  height: 200px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const GrayBoxBox = styled.div`
  height: 100px;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

interface IPropsInBox {
  isActive?: boolean;
}

export const InBox = styled.button<IPropsInBox>`
  margin-left: 200px;
  margin-top: 30px;
  border-radius: 20px;
  height: 52px;
  width: 179px;
  color: black;
  font-size: 16px;
  border: 3px solid #69da69;
  cursor: pointer;
  background-color: white;
`;
export const AddBox = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: flex-start;
`;

export const SurchPush = styled.button`
  font-size: 16px;
  color: black;
  border: 3px solid #69da69;
  background-color: white;
  cursor: pointer;
  border-radius: 20px;
  width: 124px;
  height: 52px;
  margin-top: 12px;
  margin-left: 12px;
`;
export const PutAdd = styled.div`
  font-size: 16px;
  line-height: 45px;
  border: 3px solid #ffdb86;
  width: 450px;
  height: 52px;
  margin-top: 12px;
  border-radius: 15px;
  padding-left: 10px;
`;
export const PutAddDetail = styled.input`
  font-size: 16px;
  border: 3px solid #ffdb86;
  width: 600px;
  height: 52px;
  margin-top: 12px;
  border-radius: 15px;
  padding-left: 10px;
`;
export const Col = styled.div`
  width: 600px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TagBox = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
export const Tag = styled.div`
  font-size: 20px;
  height: 40px;
  border-radius: 15px;
  padding: 0px 10px;
  line-height: 35px;
  margin-right: 20px;
  border: green 1px solid;
  cursor: pointer;
`;
