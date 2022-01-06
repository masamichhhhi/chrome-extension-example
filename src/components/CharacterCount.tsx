import React, { VFC } from "react";

import { useCharacterCountState } from "../globalStates/characterState";

const CharacterCount: VFC = () => {
  const count = useCharacterCountState();
  return <>Character Count: {count}</>;
};

export default CharacterCount;
