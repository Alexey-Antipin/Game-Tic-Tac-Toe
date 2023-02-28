import { useState } from "react";
import { Component, GameOver } from "../Component";
import { appElement } from "../ts";
import "./index.scss";

export const App = () => {
  const [count, setCount] = useState<number>(3);
  const [win, setWin] = useState<string>("");
  const [appElement, setAppElement] = useState<appElement>({ massive: [] });

  return (
    <div className="app">
      {count > 0 ? (
        <Component
          setAppElement={setAppElement}
          appElement={appElement}
          setCount={setCount}
          count={count}
        />
      ) : (
        <GameOver
          appElement={appElement}
          setCount={setCount}
          setWin={setWin}
          win={win}
        />
      )}
    </div>
  );
};
