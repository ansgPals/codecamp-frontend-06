import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
