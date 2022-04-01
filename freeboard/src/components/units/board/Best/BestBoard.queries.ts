import { gql } from "@apollo/client";

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
export const FETCH_BOARDS_OF_THE_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
      updatedAt
    }
  }
`;
