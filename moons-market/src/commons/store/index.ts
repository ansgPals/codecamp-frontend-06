import { atom } from "recoil";

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
