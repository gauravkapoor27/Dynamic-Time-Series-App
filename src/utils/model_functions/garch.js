const garch = (
  params,
  setParams,
  lastVal,
  speed,
  returnVal,
  selectedDistribution,
  garchSigma,
  setGarchSigma,
  err
) => {
  const alpha0 = params["alpha0"];
  const alpha1 = params["alpha1"];
  const beta1 = params["beta1"];
  const sigma = garchSigma;
  const meanLevel = params["mean level"];

  const updateGarchSigma = () => {
    let newVal =
      alpha0 +
      alpha1 * Math.pow(returnVal.current, 2) +
      beta1 * Math.pow(sigma, 2) +
      err;

    if (newVal > 0) {
      return Math.sqrt(newVal);
    } else {
      return 1;
    }
  };

  setGarchSigma(updateGarchSigma);

  const newVal = meanLevel + sigma * err;

  returnVal.current = newVal - lastVal.current;
  lastVal.current = newVal;

  return newVal;
};

export default garch;
