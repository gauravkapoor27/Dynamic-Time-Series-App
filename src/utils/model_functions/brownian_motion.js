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
  const sigma = params.volatility;

  if (selectedDistribution === "Normal") {
    err = sigma * Math.sqrt(1 / speed) * normalRandomNumber();
  } else if (selectedDistribution === "Laplace") {
    err = laplaceRandomNumber(params.scale);
  }
  const mu = params.drift;

  const newVal = lastVal.current + mu * (1 / speed) + err;

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
