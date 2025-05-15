import { useContext } from "react";
import { BingoContext } from "@/context/BingoContext";
import type { BingoContextType } from "@/types";

const useBingo: () => BingoContextType = () => {
  const context = useContext(BingoContext);

  return context as BingoContextType;
};

export default useBingo;
