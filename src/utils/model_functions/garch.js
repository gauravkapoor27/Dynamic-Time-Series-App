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

  const alpha0 = params["alpha0"];
  const alpha1 = params["alpha1"];
  const beta1 = params["beta1"];
  const sigma = params.volatility;
  const meanLevel = params["mean level"];

  setParams({
    ...params,
    volatility: Math.sqrt(
      alpha0 +
        alpha1 * Math.pow(returnVal.current, 2) +
        beta1 * Math.pow(sigma, 2)
    ),
  });

  const newVal = meanLevel + sigma * err;

  returnVal.current = newVal - lastVal.current;
  lastVal.current = newVal;

  return newVal;
};

export default white_noise;
