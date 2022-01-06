import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import CharacterCounter from '@/components/CharacterCounter';

const App = () => (
  <RecoilRoot>
    <CharacterCounter />
  </RecoilRoot>
);

const app = document.createElement('div');
document.body.prepend(app);
ReactDOM.render(<App />, app);
