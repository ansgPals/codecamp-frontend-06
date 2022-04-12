import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN, { variables: {} });
  const router = useRouter();

  if (!data) {
    alert("로그인을 먼저 해주세요");
    router.push(`day22-01-login`);
  }

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
    </>
  );
}
