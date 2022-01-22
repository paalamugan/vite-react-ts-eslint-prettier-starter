import '@app/styles/App.scss';

import Header from '@app/components/Header';
import { ReactElement, useState } from 'react';

function App(): ReactElement {
  const [count, setCount] = useState(0);

  return (
    <main className="App">
      <header className="App-header">
        <Header />
        <p>
          <button type="button" onClick={() => setCount((countNew) => countNew + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </main>
  );
}

export default App;
