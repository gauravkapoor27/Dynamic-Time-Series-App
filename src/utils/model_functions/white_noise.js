const white_noise = (
  params,
  setParams,
  lastVal,
  speed,
  returnVal,
  selectedDistribution,
  err
) => {
  const meanLevel = params["mean level"];

  const newVal = meanLevel + err;
  returnVal.current = newVal - lastVal.current;
  lastVal.current = newVal;

  return newVal;
};

export default white_noise;
