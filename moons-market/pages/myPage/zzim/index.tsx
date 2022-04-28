import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

import ZzimItemPage from "../../../src/components/units/zzim/zzimItem";

const Back = styled.div`
  margin-top: 150px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.div`
  max-width: 1200px;
  min-width: 800px;
  width: 60vw;
  height: 60px;
  border-bottom: orange 1px solid;
  padding-left: 20px;
  font-weight: bold;
  color: #25d125;
  font-size: 35px;
`;
const ZzimItem = styled.div`
  width: 500px;
  font-size: 35px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String) {
    fetchUseditemsIPicked(search: $search) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        _id
        email
        name
        picture
      }

      createdAt

      createdAt
    }
  }
`;

export default function MyZzimPage() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });
  console.log(data?.fetchUseditemsIPicked[0]._id);
  return (
    <>
      <Back>
        <Wrapper>
          <Title>찜목록</Title>
          <ZzimItem>
            {" "}
            {data?.fetchUseditemsIPicked.map((el) => (
              <ZzimItemPage el={el} key={el._id} />
            ))}
          </ZzimItem>
        </Wrapper>
      </Back>
    </>
  );
}
