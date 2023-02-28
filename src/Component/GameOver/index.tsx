import { useEffect, useState } from "react";
import { appElement } from "../../ts";
import "./index.scss";

type Props = {
  setCount: (value: number) => void;
  appElement: appElement;
  setWin: (value: string) => void;
  win: string;
};

export const GameOver: React.FC<Props> = ({
  appElement,
  setCount,
  setWin,
  win,
}) => {
  const [styleWin, setStyleWin] = useState("");

  useEffect(() => {
    winWho();
  }, []);

  const winWho = () => {
    let winGamers = 1;
    const array = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < array.length; i++) {
      let [a, b, c] = array[i];

      if (
        appElement.massive[a].num === "X" &&
        appElement.massive[b].num === "X" &&
        appElement.massive[c].num === "X"
      ) {
        winGamers = 0;
        setWin("Ты победил.");
        setStyleWin("you__win");
      }

      if (
        appElement.massive[a].num === "O" &&
        appElement.massive[b].num === "O" &&
        appElement.massive[c].num === "O"
      ) {
        winGamers = 0;
        setWin("Он победил.");
        setStyleWin("his__win");
      }
    }
    if (winGamers == 1) {
      setWin("Никто не победил.");
      setStyleWin("nothing__win");
    }
  };

  const beginGame = () => {
    setCount(3);
    setWin("");
  };

  return (
    <div className="message__win">
      <div className={styleWin}>{win}</div>
      <button className="message__button" onClick={() => beginGame()}>
        Играть ещё раз.
      </button>
    </div>
  );
};
