import React from 'react';
import ReactDOM from 'react-dom';

import './contents.css';

const Main = () => <div>App</div>;

const app = document.createElement('div');
app.id = 'my-extension-root';
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
