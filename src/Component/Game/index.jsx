import { useEffect } from "react";
import "./index.scss";

export const Component = ({
  count,
  setCount,
  appElement,
  setAppElement,
}) => {
  useEffect(() => {
    randomNumbers();
  }, []);

  const randomNumbers = () => {
    let massive = [];

    for (let i = 0; i < 9; i++) {
      massive.push({
        id: i,
        num: i,
        status: null,
        class: "game__element",
      });
    }

    setAppElement({ massive });
  };

  const clickButton = (event) => {
    // Наш ход.
    if (
      appElement.massive[event.id].status === null &&
      appElement.massive[event.id].status !== "enemy"
    ) {
      setAppElement((state) => {
        return {
          massive: state.massive.map((el) =>
            el.id === event.id
              ? {
                  ...el,
                  num: "X",
                  status: "player",
                  class: "game__element__true",
                }
              : el
          ),
        };
      });
    } else {
      return;
    }

    // Ход врага.
    clickEnemy(event);
    setCount(count - 1);
  };

  const clickEnemy = (event) => {
    while (true) {
      let numEnemy = Math.floor(Math.random() * 8);

      if (
        appElement.massive[numEnemy].status === null &&
        appElement.massive[numEnemy] !== appElement.massive[event.id]
      ) {
        setAppElement((state) => {
          return {
            massive: state.massive.map((el) =>
              el.id === numEnemy
                ? {
                    ...el,
                    num: "O",
                    status: "enemy",
                    class: "game__element__false",
                  }
                : el
            ),
          };
        });
        break;
      }
      continue;
    }
  };

  return (
    <div className="game__block">
      {appElement.massive.map((event, index) => {
        return (
          <div
            className={event.class}
            key={index}
            onClick={() => clickButton(event)}>
            {event.num}
          </div>
        );
      })}
    </div>
  );
};
