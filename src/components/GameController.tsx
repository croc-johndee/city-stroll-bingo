"use client";
import useBingo from "@/hooks/useBingo";
import type { Color } from "@/types";
import { COLOR_CLASSES } from "@/const";

const GameController = () => {
  const { totalScore, currentColor, updateColor, resetCard } = useBingo();

  const {
    gameController,
    leftWrapper,
    colorPicker,
    circle,
    circle_active,
    button,
    button_hover,
  } = controllerStyles;

  return (
    <div className={gameController}>
      <span className={leftWrapper}>
        <span>Total Bingos: {totalScore}</span>
        <span className={colorPicker}>
          Color:
          {Object.keys(COLOR_CLASSES).map((color) => (
            <button
              key={color}
              className={`${circle} ${COLOR_CLASSES[color as Color]} ${
                currentColor === color ? circle_active : ""
              }`}
              onClick={() => updateColor(color as Color)}
            ></button>
          ))}
        </span>
      </span>

      <button className={`${button} ${button_hover}`} onClick={resetCard}>
        New BingoCard
      </button>
    </div>
  );
};

export default GameController;

const controllerStyles = {
  gameController: "flex gap-4 items-end justify-between my-4",
  leftWrapper: "flex flex-col gap-1",
  colorPicker: "flex gap-2 items-center",
  circle: "size-5 rounded-full cursor-pointer",
  circle_active: "border-1 scale-120",
  button:
    "bg-gray-100 dark:bg-gray-900 border  border-gray-700 dark:border-gray-300  cursor-pointer text-xs font-bold py-1 px-2 rounded",
  button_hover:
    "hover:scale-105 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-hover duration-300 ease-in-out",
};
