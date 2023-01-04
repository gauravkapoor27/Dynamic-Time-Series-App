import normalRandomNumber from "../normalRandomNumber";
import laplaceRandomNumber from "../laplaceRandomNumber";

const brownian_motion = (
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
  const mu = params.drift;
  const sigma = params.volatility;

  const newVal =
    lastVal.current + mu * (1 / speed) + sigma * Math.sqrt(1 / speed) * err;

  returnVal.current = newVal - lastVal.current;
  lastVal.current = newVal;

  if (lastVal.current > params["mean level"] + 3 * params.volatility) {
    setParams({
      ...params,
      "mean level": lastVal.current - 3 * params.volatility,
    });
  } else if (lastVal.current < params["mean level"] - 3 * params.volatility) {
    setParams({
      ...params,
      "mean level": lastVal.current + 3 * params.volatility,
    });
  }

  return newVal;
};

export default brownian_motion;
