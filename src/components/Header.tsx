import { ReactElement } from 'react';

import logo from '../logo.svg';

export default function Header(): ReactElement {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React! + Eslint + Prettier</p>
    </>
  );
}
