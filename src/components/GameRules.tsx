"use client";
import useBingo from "@/hooks/useBingo";

const GameRules: React.FC = () => {
  const { showGameRules, toggleGameRules } = useBingo();

  if (!showGameRules) return null;

  const {
    gameRules,
    container,
    header,
    textWrapper,
    list,
    button,
    button_hover,
  } = gameRuleStyles;

  return (
    <div className={gameRules}>
      <div className={container}>
        <h2 className={header}>City Stroll Bingo Rules</h2>

        <div className={textWrapper}>
          <p>
            Welcome to <span className="font-semibold">City Stroll Bingo</span>!
            This is a fun twist on classic bingo that you can play with your
            friends while exploring the city. Here’s how it works:
          </p>

          <ul className={list}>
            <li>
              <span className="font-semibold">Get Your Card:</span>
              Each player opens a bingo card. The card is a 5x5 grid filled with
              phrases you might hear while walking around.
            </li>
            <li>
              <span className="font-semibold">Free Center Slot:</span>
              The center slot on your card is a freebie—it’s already marked for
              you!
            </li>
            <li>
              <span className="font-semibold">Stroll and Listen:</span>
              As you and your friends walk through the city, keep your ears open
              for any of the phrases on your card. They can be in any language!
            </li>
            <li>
              <span className="font-semibold">Mark Your Card:</span>
              When you hear a phrase from your card, mark that slot. Tap the
              field to toggle it.
            </li>
            <li>
              <span className="font-semibold">Win with Lines:</span>
              Just like regular bingo, you win by completing a line—horizontal,
              vertical, or diagonal. The center slot helps you out!
            </li>
            <li>
              <span className="font-semibold">Multiple Wins:</span>
              Keep going even after your first win! You can score multiple
              bingos on the same card. Each new line adds to your total score.
            </li>
          </ul>

          <p>
            Have fun exploring the city and listening for those phrases. Who
            will be the first to shout “Bingo!”?
          </p>
        </div>

        <button
          onClick={toggleGameRules}
          className={`${button} ${button_hover}`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GameRules;

const gameRuleStyles = {
  gameRules:
    "absolute top-0 left-0 right-0 bottom-0 bg-black/80 flex justify-center z-50 p-4",
  container:
    "bg-gray-50 overflow-scroll dark:bg-gray-800 text-gray-800 dark:text-gray-200 max-w-lg h-fit p-6 rounded-lg shadow-lg",
  header:
    "text-2xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400",
  textWrapper: "space-y-4 text-sm leading-relaxed",
  list: "list-disc pl-5 space-y-2",
  button:
    "block mt-4 mx-auto bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer",
  button_hover:
    "hover:bg-blue-600 dark:hover:bg-blue-700 transition-hover duration-300",
};
