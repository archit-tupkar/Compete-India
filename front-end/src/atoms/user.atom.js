import { atom, selector } from "recoil";

export const userInfoAtom = atom({
    key: "userInfoAtom",
    default: {},
});

export const isLogedInAtom = selector({
    key: "isLogedInAtom",
    get: ({ get }) => {
        const user = get(userInfoAtom);
        return user?.username ? true : false;
    },
});
