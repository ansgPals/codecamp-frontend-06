import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";
import GlobalStateContainer from "../../src/components/units/21-global-state/boardWrite.container";

export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(true);
  }, []);
  return <GlobalStateContainer />;
}
