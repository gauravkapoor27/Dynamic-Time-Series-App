import normalRandomNumber from "../normalRandomNumber";

const white_noise = (params, setParams, lastVal, speed) => {
  const err = normalRandomNumber();

  const meanLevel = params["mean level"];
  const sigma = params.volatility;
  const newVal = meanLevel + sigma * err;
  lastVal.current = newVal;

  return newVal;
};

export default white_noise;
