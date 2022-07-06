import { useState } from "react";
import { Component } from "../Component/Game";
import { GameOver } from "../Component/GameOver";
import "./index.scss";

export const App = () => {
  const [count, setCount] = useState(3);
  const [win, setWin] = useState("");
  const [appElement, setAppElement] = useState({ massive: [] });

  return (
    <div className="app">
      {count > 0 ? (
        <Component
          count={count}
          setCount={setCount}
          appElement={appElement}
          setAppElement={setAppElement}
        />
      ) : (
        <GameOver
          win={win}
          setWin={setWin}
          setCount={setCount}
          appElement={appElement}
        />
      )}
    </div>
  );
};
