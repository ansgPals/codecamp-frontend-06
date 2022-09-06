import { gql } from "@apollo/client";

export const UPLOAD_FILE_MANY = gql`
  mutation uploadFileMany($files: [Upload!]!) {
    uploadFileMany(files: $files)
  }
`;
