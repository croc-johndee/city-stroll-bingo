import { useEffect, useState } from "react";
import { DotLottieReact, type DotLottie } from "@lottiefiles/dotlottie-react";
import useBingo from "@/hooks/useBingo";
import type { LottieRef } from "@/types";

const WinAnimation: React.FC = () => {
  const { winAnimationTrigger } = useBingo();
  const [BingoLottie, setBingoLottie] = useState<DotLottie | null>(null);
  const [penguinLottie, setPenguinLottie] = useState<DotLottie | null>(null);
  const [status, setStatus] = useState({ penguin: "", bingo: "" });

  const blockTrigger =
    (!BingoLottie && !penguinLottie) ||
    status.bingo === "playing" ||
    status.penguin === "playing";

  const { penguin, bingo, animation } = getWinAnimationStyles(status);

  // Effect for Registering event listeners
  useEffect(() => {
    if (!BingoLottie || !penguinLottie) return;

    const lottieRefs: LottieRef[] = [
      { type: "bingo", ref: BingoLottie },
      { type: "penguin", ref: penguinLottie },
    ];

    lottieRefs.forEach(({ ref, type }) => {
      ref.addEventListener("play", () => onPlay(type));
      ref.addEventListener("complete", () => onComplete(type));
    });

    // Cleanup
    return () => {
      lottieRefs.forEach(({ ref, type }) => {
        ref.removeEventListener("play", () => onPlay(type));
        ref.removeEventListener("complete", () => onComplete(type));
      });
    };
  }, [BingoLottie, penguinLottie]);

  useEffect(() => {
    if (blockTrigger) return;
    // show bingo animation immediately and delay animation with 500ms
    onPlay("bingo");
    setTimeout(() => {
      BingoLottie?.play();
    }, 500);

    // show penguin animation after 1.5s
    setTimeout(() => {
      onPlay("penguin");
      setTimeout(() => {
        penguinLottie?.play();
      }, 500);
    }, 1500);
  }, [winAnimationTrigger]);

  const onPlay = (type: "penguin" | "bingo") =>
    setStatus((prev) => ({
      ...prev,
      [type]: "playing",
    }));

  const onComplete = (type: "penguin" | "bingo") =>
    setStatus((prev) => ({
      ...prev,
      [type]: "completed",
    }));

  return (
    <>
      <DotLottieReact
        className={`${animation} ${bingo}`}
        dotLottieRefCallback={setBingoLottie}
        src={`assets/lotties/bingo.lottie`}
      />

      <DotLottieReact
        dotLottieRefCallback={setPenguinLottie}
        className={`${animation} ${penguin}`}
        src={`assets/lotties/penguin.lottie`}
      />
    </>
  );
};

export default WinAnimation;

type WinAnimationStyleProp = {
  penguin: string;
  bingo: string;
};

const getWinAnimationStyles: (
  status: WinAnimationStyleProp
) => Record<string, string> = (status) => ({
  penguin:
    status.penguin === "playing"
      ? "top-[-16px] sm:top-[-20px] lg:top-[-24px]"
      : "top-[-180px]",
  bingo:
    status.bingo === "playing"
      ? "top-[120px] sm:top-[150px] lg:top-[180px]"
      : "top-[460px]",
  animation:
    "absolute z-7 transition-top duration-500 ease-in-out pointer-events-none",
});
