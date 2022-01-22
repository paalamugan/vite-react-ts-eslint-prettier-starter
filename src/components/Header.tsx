import { ReactElement } from 'react';

import logo from '@app/assets/logo.svg';

export default function Header(): ReactElement {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React! + Typescript + Eslint + Prettier</p>
    </>
  );
}
