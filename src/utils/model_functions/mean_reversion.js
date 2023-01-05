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
  const sigma = params.volatility;

  if (selectedDistribution === "Normal") {
    err = sigma * normalRandomNumber();
  } else if (selectedDistribution === "Laplace") {
    err = laplaceRandomNumber(params.scale);
  }

  const meanLevel = params["mean level"];

  const alpha = params["reversion rate"];

  const newVal = lastVal.current + alpha * (meanLevel - lastVal.current) + err;
  returnVal.current = newVal - lastVal.current;
  lastVal.current = newVal;

  return newVal;
};

export default mean_reversion;
