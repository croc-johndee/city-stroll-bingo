import { useState } from "react";
import Image from "next/image";
import useBingo from "@/hooks/useBingo";
import type { BingoFieldType, Color } from "@/types";
import { FREE_FIELD_INDEX, COLOR_CLASSES } from "@/const";

const BingoField: React.FC<BingoFieldType> = ({
  id,
  isSelected,
  phrase,
  hasWon,
}) => {
  const { toggleField, currentColor } = useBingo();
  const [fieldClicked, setFieldClicked] = useState(false);
  const {
    bingoField,
    bingoField_focus,
    bingoField_sizes,
    circle,
    circle_sizes,
    circle_selected,
    circle_win,
    circle_win_hover,
    circle_clicked,
    text,
    text_selected,
  } = getBingoFieldStyles({
    isSelected,
    hasWon,
    currentColor,
    fieldClicked,
  });

  const onFieldClick = () => {
    toggleField(id);
    setFieldClicked(true);

    setTimeout(() => setFieldClicked(false), 500);
  };

  if (id === FREE_FIELD_INDEX) {
    return (
      <Image
        src="/assets/images/city_stroll_bingo.png"
        alt="City background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    );
  }

  return (
    <button
      onClick={onFieldClick}
      className={`${bingoField} ${bingoField_focus} ${bingoField_sizes}`}
    >
      <span
        className={`${circle} ${circle_selected} ${circle_win} ${circle_win_hover} ${circle_clicked} ${circle_sizes}`}
      ></span>
      <span className={`${text} ${text_selected}`}>{phrase}</span>
    </button>
  );
};

export default BingoField;

type BingoFieldStyleProps = {
  isSelected: BingoFieldType["isSelected"];
  hasWon: BingoFieldType["hasWon"];
  currentColor: Color;
  fieldClicked: boolean;
};

const getBingoFieldStyles: (
  bingoStyleProps: BingoFieldStyleProps
) => Record<string, string> = ({
  isSelected,
  hasWon,
  currentColor,
  fieldClicked,
}) => {
  return {
    bingoField:
      "relative p-1 flex items-center justify-center text-center cursor-pointer text-[9px] size-16",
    bingoField_focus: "focus:bg-inherited",
    bingoField_sizes: " sm:size-20 sm:text-xs lg:size-24 lg:text-md",
    circle: "absolute rounded-full size-14",
    circle_sizes: "sm:size-16 lg:size-21",
    circle_selected: isSelected ? COLOR_CLASSES[currentColor] : "",
    circle_win: hasWon ? "bg-yellow-300 dark:bg-yellow-600" : "",
    circle_win_hover: hasWon
      ? "hover:bg-yellow-400 hover:dark:bg-yellow-700"
      : "",
    circle_clicked: fieldClicked
      ? isSelected
        ? "animate-selectField"
        : "animate-deselectField"
      : "",
    text: "text-bold z-5 pointer-events-none",
    text_selected: isSelected ? "line-through" : "",
  };
};
