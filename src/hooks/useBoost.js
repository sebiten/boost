import { useContext } from "react";
import { BoostContext } from "../context/boostProvider";

export const useBoost = () => {
  return useContext(BoostContext);
};
