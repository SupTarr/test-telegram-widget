import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const telegramWrapperRef = useRef(null);

  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://telegram.org/js/telegram-widget.js?22";
    scriptElement.setAttribute("data-telegram-login", "samplebot");
    scriptElement.setAttribute("data-size", "large");
    scriptElement.setAttribute(
      "data-auth-url",
      "https://test-telegram-widget.vercel.app/"
    );
    scriptElement.async = true;

    telegramWrapperRef.current.appendChild(scriptElement);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <div ref={telegramWrapperRef}></div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
