import type { DotLottie } from "@lottiefiles/dotlottie-react";

export type Color = "green" | "orange" | "blue" | "purple" | "red";

export type BingoFieldType = {
  id: number;
  phrase: string;
  isSelected: boolean;
  hasWon: boolean;
};

export type BingoContextType = {
  fieldData: BingoFieldType[][];
  totalScore: number;
  winAnimationTrigger: boolean;
  currentColor: Color;
  showGameRules: boolean;
  toggleField: (id: number) => void;
  resetCard: () => void;
  updateColor: (color: Color) => void;
  toggleGameRules: () => void;
};

export type LottieRef = {
  type: "penguin" | "bingo";
  ref: DotLottie;
};
