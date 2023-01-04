import normalRandomNumber from "../normalRandomNumber";

const mean_reversion = (params, setParams, lastVal, speed) => {
  const err = normalRandomNumber();

  const meanLevel = params["mean level"];
  const sigma = params.volatility;
  const alpha = params["reversion rate"];

  const newVal =
    lastVal.current + alpha * (meanLevel - lastVal.current) + sigma * err;
  lastVal.current = newVal;

  return newVal;
};

export default mean_reversion;
