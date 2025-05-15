"use client";
import useBingo from "@/hooks/useBingo";
import WinAnimation from "./WinAnimation";
import BingoField from "./BingoField";

const BingoCard: React.FC = () => {
  const { bingoCard, table, td, td_hover } = bingoCardStyles;
  const { fieldData } = useBingo();

  return (
    <div className={bingoCard}>
      <WinAnimation />

      <table className={table}>
        <tbody>
          {fieldData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map(({ id, isSelected, phrase, hasWon }, colIndex) => (
                <td key={colIndex} className={`${td} ${td_hover}`}>
                  <BingoField
                    id={id}
                    isSelected={isSelected}
                    phrase={phrase}
                    hasWon={hasWon}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingoCard;

const bingoCardStyles = {
  bingoCard: "relative overflow-hidden",
  table: "border-collapse mx-auto",
  td: "p-0 m-0 border border-gray-800 bg-gray-100 dark:border-gray-300 dark:bg-gray-600 overflow-hidden relative",
  td_hover:
    "hover:bg-white dark:hover:bg-gray-700 transition-hover duration-400 ease-in-out",
};
