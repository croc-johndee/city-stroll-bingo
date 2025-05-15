"use client";
import React, { createContext, useState, useEffect } from "react";
import { PHRASES, FREE_FIELD_INDEX } from "@/const";
import type { BingoContextType, Color, BingoFieldType } from "@/types";

export const BingoContext = createContext<BingoContextType | undefined>(
  undefined
);

export const BingoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fieldData, setFieldData] = useState<BingoContextType["fieldData"]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [winAnimationTrigger, setWinAnimationTrigger] = useState(false);
  const [currentColor, setCurrentColor] = useState<Color>("green");
  const [showGameRules, setShowGameRules] = useState(false);

  useEffect(() => setFieldData(generateBingoCard()), []);

  const startAnimation = () => setWinAnimationTrigger(!winAnimationTrigger);

  const toggleField = (id: BingoFieldType["id"]) => {
    const updatedCard = [...fieldData].map((row) =>
      row.map((field) =>
        field.id === id ? { ...field, isSelected: !field.isSelected } : field
      )
    );

    const winningFields = getWinningFields(updatedCard);

    setFieldData((prevCard) =>
      prevCard.map((row) =>
        row.map((field) => ({
          ...field,
          hasWon: [...new Set(winningFields)].includes(field.id),
          isSelected: field.id === id ? !field.isSelected : field.isSelected,
        }))
      )
    );

    const newScore = winningFields.length / 5;
    if (totalScore < newScore) startAnimation();
    setTotalScore(newScore);
  };

  const resetCard = () => {
    const newCard = generateBingoCard();
    setFieldData(newCard);
    setTotalScore(0);
  };

  const updateColor = (color: Color) => setCurrentColor(color);

  const toggleGameRules = () => setShowGameRules(!showGameRules);

  const value = {
    fieldData,
    totalScore,
    winAnimationTrigger,
    currentColor,
    showGameRules,
    toggleField,
    resetCard,
    updateColor,
    toggleGameRules,
  };

  return (
    <BingoContext.Provider value={value}>{children}</BingoContext.Provider>
  );
};

const generateBingoCard = (): BingoContextType["fieldData"] => {
  const shuffledPhrases = shuffleArray([...PHRASES]);

  const cardFields = shuffledPhrases.map((phrase, index) => ({
    id: index,
    phrase,
    isSelected: index === FREE_FIELD_INDEX,
    hasWon: false,
  }));

  const newCard = [
    cardFields.slice(0, 5),
    cardFields.slice(5, 10),
    cardFields.slice(10, 15),
    cardFields.slice(15, 20),
    cardFields.slice(20, 25),
  ];

  return newCard;
};

const shuffleArray = (phrases: string[]) => {
  for (let i = phrases.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [phrases[i], phrases[j]] = [phrases[j], phrases[i]];
  }

  phrases.splice(FREE_FIELD_INDEX, 0, "");

  return phrases;
};

const isSelected = (field: BingoFieldType) => field.isSelected;

const getWinningFields = (card: BingoFieldType[][]) => {
  const winningFields: BingoFieldType["id"][] = [];

  const leftDiagonal = card.map((row, index) => row[index]);
  const rightDiagonal = card.map((row, index) => row[card.length - 1 - index]);

  card.forEach((row, rowIndex) => {
    // check winning rows
    if (row.every(isSelected)) {
      winningFields.push(...row.map((field) => field.id));
    }
    // check winning columns
    const column = card.map((row) => row[rowIndex]);
    if (column.every(isSelected)) {
      winningFields.push(...column.map((field) => field.id));
    }
  });

  // check winning diagonals
  if (leftDiagonal.every(isSelected)) {
    winningFields.push(...leftDiagonal.map((field) => field.id));
  }
  if (rightDiagonal.every(isSelected)) {
    winningFields.push(...rightDiagonal.map((field) => field.id));
  }

  return winningFields;
};
