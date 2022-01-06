import { useCallback } from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

type CharacterState = {
  character: string;
};

const characterState = atom<CharacterState>({
  key: "characterState",
  default: { character: "" },
});

const characterCounterState = selector({
  key: "characterCounterState",
  get: ({ get }) => {
    const { character: text } = get(characterState);

    return text.length;
  },
});

export const useCharacterState = () => useRecoilValue(characterState);

export const useCharacterCountState = () =>
  useRecoilValue(characterCounterState);

export const useCharacterMutators = () => {
  const setState = useSetRecoilState(characterState);

  const setCharacter = useCallback(
    (character: string) => {
      setState({ character });
    },
    [setState]
  );

  return { setCharacter };
};
