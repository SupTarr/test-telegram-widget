import { useState, useRef, useEffect, useMemo } from "react";
import { Card } from "flowbite-react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const searchParams = useMemo(
    () => new URLSearchParams(document.location.search),
    []
  );

  const [count, setCount] = useState(0);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const telegramWrapperRef = useRef(null);

  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://telegram.org/js/telegram-widget.js?22";
    scriptElement.setAttribute("data-telegram-login", "suptarr_bot");
    scriptElement.setAttribute("data-size", "large");
    scriptElement.setAttribute("data-auth-url", "");
    scriptElement.async = true;

    telegramWrapperRef.current.appendChild(scriptElement);
  }, []);

  useEffect(() => {
    setId(searchParams.get("id"));
    setFirstName(searchParams.get("first_name"));
    setLastName(searchParams.get("last_name"));
  }, [searchParams]);

  return (
    <>
      <div className="flex mb-5">
        <a
          className="flex flex-1 justify-center"
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a
          className="flex flex-1 justify-center"
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="mb-3" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mb-5">
        Click on the Vite and React logos to learn more
      </p>
      <div
        className="telegram-login-widget flex justify-center mb-3"
        ref={telegramWrapperRef}
      ></div>
      {id || firstName || lastName ? (
        <Card className="max-w-sm">
          <h5 className="text-xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
            Data from Telegram redirecting
          </h5>
          <p className="font-normal text-left text-gray-700 dark:text-gray-400">
            <span className="font-bold">ID: </span> {id}
          </p>
          <p className="font-normal text-left text-gray-700 dark:text-gray-400">
            <span className="font-bold">First name: </span>
            {firstName}
          </p>
          <p className="font-normal text-left text-gray-700 dark:text-gray-400">
            <span className="font-bold">Last name: </span>
            {lastName}
          </p>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
