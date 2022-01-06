import React, { ChangeEvent, VFC } from 'react';

import { useCharacterMutators, useCharacterState } from '../globalStates/characterState';

const TextInput: VFC = () => {
  const { character } = useCharacterState();
  const { setCharacter } = useCharacterMutators();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacter(e.target.value);
  };

  return (
    <div>
      <input type='text' value={character} onChange={onChange} />
      <br />
      Echo: {character}
    </div>
  );
};

export default TextInput;
