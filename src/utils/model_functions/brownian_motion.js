import normalRandomNumber from "../normalRandomNumber";

const brownian_motion = (params, setParams, lastVal, speed) => {
  const err = normalRandomNumber();
  const mu = params.drift;
  const sigma = params.volatility;

  const newVal =
    lastVal.current + mu * (1 / speed) + sigma * Math.sqrt(1 / speed) * err;

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
