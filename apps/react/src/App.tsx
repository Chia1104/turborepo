import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Page, Input, cn } from "ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Page>
      <div
        className={cn("App flex flex-col items-center justify-center gap-5")}>
        <div className="flex gap-5">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer noopener">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noreferrer noopener">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React + TS + TailwindCSS</h1>
        <div className={cn("card flex flex-col gap-3")}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <Input />
      </div>
    </Page>
  );
}

export default App;
