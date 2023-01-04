import normalRandomNumber from "../normalRandomNumber";
import laplaceRandomNumber from "../laplaceRandomNumber";

const mean_reversion = (
  params,
  setParams,
  lastVal,
  speed,
  returnVal,
  selectedDistribution
) => {
  let err;
  if (selectedDistribution === "Normal") {
    err = normalRandomNumber();
  } else if (selectedDistribution === "Laplace") {
    err = laplaceRandomNumber(params.scale);
  }

  const meanLevel = params["mean level"];
  const sigma = params.volatility;
  const alpha = params["reversion rate"];

  const newVal =
    lastVal.current + alpha * (meanLevel - lastVal.current) + sigma * err;
  returnVal.current = newVal - lastVal.current;
  lastVal.current = newVal;

  return newVal;
};

export default mean_reversion;