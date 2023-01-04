import normalRandomNumber from "../normalRandomNumber";
import laplaceRandomNumber from "../laplaceRandomNumber";

const white_noise = (
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

  const meanLevel = params["mean level"];
  const sigma = params.volatility;
  const newVal = meanLevel + sigma * err;
  returnVal.current = newVal - lastVal.current;
  lastVal.current = newVal;

  return newVal;
};

export default white_noise;
