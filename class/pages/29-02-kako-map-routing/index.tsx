import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapPage() {
  const router = useRouter();
  const onClickMoveToMap = () => {
    router.push(`/29-03-kako-map-routed`);
  };

  return (
    // <button onClick={onClickMoveToMap}> 맵으로 이동하기</button>
    <Link href="/29-03-kako-map-routed">맵으로 이동하기</Link>
    // <a href="/29-03-kako-map-routed">맵으로 이동하기</a>
  );
}
