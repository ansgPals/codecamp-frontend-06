import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);
  // 요청하면 인가 이루어짐
  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
    </>
  );
}
