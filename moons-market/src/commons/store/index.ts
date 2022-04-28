import { atom, selector } from "recoil";
import { getAccessToken } from "../library/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
    _id: "",
    userPoint: {
      amount: 0,
    },
  },
});
export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const todayProductState = atom({
  key: "todayProductState",
  default: [],
});
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const isLoadedState = atom({
  key: "isLoadedState",
  default: true,
});
