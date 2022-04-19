import { useRouter } from "next/router";
import { useResetRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const [visitedPage, setVisitedPage] = useResetRecoilState(visitedPageState);
  const router = useRouter();

  const onClickMoveToPage = (path: any) => () => {
    router.push(path);
    setVisitedPage(path);
  };
  return {
    visitedPage,
    onClickMoveToPage,
  };
}
