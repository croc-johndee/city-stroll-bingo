"use client";
import useBingo from "@/hooks/useBingo";

const RulesButton: React.FC = () => {
  const { button, button_hover } = ruleButtonStyles;
  const { toggleGameRules } = useBingo();

  return (
    <button onClick={toggleGameRules} className={`${button} ${button_hover}`}>
      Rules
    </button>
  );
};

export default RulesButton;

const ruleButtonStyles = {
  button:
    "float-right mt-4 text-sm bg-blue-500 dark:bg-blue-600 text-white px-2 py-1 rounded",
  button_hover:
    "hover:bg-blue-600 dark:hover:bg-blue-700 transition-hover duration-300",
};
