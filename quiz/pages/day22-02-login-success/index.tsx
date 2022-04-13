import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginSuccessPage() {
  const [accessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  const dataLog = () => {
    if (accessToken === "") {
      alert("로그인을하세요");
      router.push(`/day22-01-login`);
    }
  };

  useEffect(() => {
    dataLog();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
    </>
  );
}
