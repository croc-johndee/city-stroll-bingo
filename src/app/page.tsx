import BingoCard from "@/components/BingoCard";
import GameController from "@/components/GameController";
import GameRules from "@/components/GameRules";
import RulesButton from "@/components/RulesButton";

export default function Home() {
  return (
    <>
      <div className="w-fit mx-auto relative overflow-scroll">
        <GameController />

        <BingoCard />

        <RulesButton />
      </div>
      <GameRules />
    </>
  );
}
