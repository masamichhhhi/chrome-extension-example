import React, { VFC } from "react";

import CharacterCount from "./CharacterCount";
import TextInput from "./TextInput";

const CharacterCounter: VFC = () => (
  <div>
    <TextInput />
    <CharacterCount />
  </div>
);

export default CharacterCounter;
