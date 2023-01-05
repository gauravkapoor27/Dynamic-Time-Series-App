const mean_reversion = (
  params,
  setParams,
  lastVal,
  speed,
  returnVal,
  selectedDistribution,
  err
) => {
  const meanLevel = params["mean level"];

  const alpha = params["reversion rate"];

  const newVal = lastVal.current + alpha * (meanLevel - lastVal.current) + err;
  returnVal.current = newVal - lastVal.current;
  lastVal.current = newVal;

  return newVal;
};

export default mean_reversion;
