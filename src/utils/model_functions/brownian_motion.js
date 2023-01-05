const brownian_motion = (
  params,
  setParams,
  lastVal,
  speed,
  returnVal,
  selectedDistribution,
  err
) => {
  const mu = params.drift;

  const newVal =
    lastVal.current + mu * (1 / speed) + err * Math.sqrt(1 / speed);

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
