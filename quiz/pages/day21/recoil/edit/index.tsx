import { useEffect } from "react";
import { useRecoilState } from "recoil";
import WriteComponent from "../../../../pages/day21/recoil/new";
import { isEditState } from "../../../../src/commons/store";

export default function RecoilEditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(true);
  }, []);
  return <WriteComponent />;
}
