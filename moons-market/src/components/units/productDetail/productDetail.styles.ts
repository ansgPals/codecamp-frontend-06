import styled from "@emotion/styled";
import { HeartOutlined } from "@ant-design/icons";

export const Back = styled.div`
  padding-top: 100px;

  width: 1000px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 50px;
`;
export const BackGround = styled.div`
  width: 1000px;
  border-bottom: 1px solid #e8e7e7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;
export const LeftBody = styled.div`
  padding: 10px;
  margin-right: 20px;
  width: 480px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 3px solid #aeddb5;
  border-radius: 30px;
`;

export const RightBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 0px 20px;
`;
export const TopBack = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TopLeft = styled.div`
  width: 400px;
  height: 50px;
  border-top: 1px solid #e8e7e7;
  border-bottom: 1px solid #e8e7e7;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const ProFilePhoto = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  line-height: 80px;
  background-image: url("/프로필.png");
  background-size: cover;
`;
export const NameDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const Name = styled.div`
  font-size: 16px;
  height: 18px;
  margin-right: 10px;
  line-height: 20px;
`;
export const Date = styled.div`
  font-size: 16px;
  height: 18px;
  line-height: 20px;
  color: #828282;
`;

export const ResponseDataBox = styled.div`
  width: 500px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleBox = styled.div`
  width: 400px;
  max-height: 80px;
  font-size: 36px;
  font-weight: bold;
  line-height: 80px;
`;
export const PriceBox = styled.div`
  width: 400px;
  height: 100px;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  font-weight: bold;
`;
export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const IMG = styled.img`
  width: 100%;
  height: 100%;
`;
export const RemarkBox = styled.div`
  margin-top: 50px;
  width: 400px;
  min-height: 200px;
  font-size: 30px;
`;
export const ProductButtonBox = styled.div`
  margin-top: 20px;
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

export const MyButton = styled.button`
  width: 200px;
  height: 50px;
  margin-right: 15px;
  margin-left: 15px;
  cursor: pointer;
  color: #0edb42;
  border-radius: 10px;
  /* border: 3px #fbc06e solid; */
  border: none;
  font-size: 20px;
  background-color: white;
  margin-bottom: 20px;
  font-weight: bold;
  box-shadow: 0px 2px 10px #bdbdbd;
  :hover {
    box-shadow: none;
    border: 1px #bdbdbd solid;
  }
`;

export const DetailTitle = styled.div`
  width: 200px;
  height: 60px;
  border: 3px solid #ffa600;
  text-align: center;
  font-size: 30px;
  line-height: 55px;
  border-radius: 15px;
  margin-bottom: 20px;
`;
export const DetailBox = styled.div`
  width: 1000px;
  padding: 50px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductDetailBox = styled.div`
  width: 1000px;
  padding: 50px;
  display: flex;
  font-size: 25px;
  flex-direction: column;
  justify-content: center;
`;

export const NoHeartIcon = styled.div`
  background-image: url("/빈하트.png");
  margin-left: 30px;
  height: 60px;
  width: 60px;
  background-size: cover;
  margin-bottom: 10px;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  color: black;
  :hover {
    background-image: url("/하트.png");
  }
  cursor: pointer;
`;
export const HeartIcon = styled.div`
  background-image: url("/하트.png");
  margin-left: 30px;
  height: 60px;
  width: 60px;
  background-size: cover;
  margin-bottom: 10px;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  color: black;
  :hover {
    background-image: url("/빈하트.png");
  }
  cursor: pointer;
`;
export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
  margin-right: 20px;
  width: 480px;
`;
export const Tag = styled.div`
  font-size: 20px;
  height: 40px;
  border-radius: 15px;
  padding: 0px 10px;
  line-height: 35px;
  margin-right: 20px;
  border: orange 1px solid;
  cursor: pointer;
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
