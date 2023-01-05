import brownian_motion from "./model_functions/brownian_motion";
import white_noise from "./model_functions/white_noise";
import mean_reversion from "./model_functions/mean_reversion";
import garch from "./model_functions/garch";

const generateNewData = (
  lastVal,
  lineSeries,
  params,
  setParams,
  speed,
  selectedModel,
  selectedDistribution,
  returnVal,
  garchSigma,
  setGarchSigma
) => {
  let newVal;

  if (selectedModel === "Brownian Motion") {
    newVal = brownian_motion(
      params,
      setParams,
      lastVal,
      speed,
      returnVal,
      selectedDistribution
    );
  } else if (selectedModel === "White Noise") {
    newVal = white_noise(
      params,
      setParams,
      lastVal,
      speed,
      returnVal,
      selectedDistribution
    );
  } else if (selectedModel === "Mean Reversion") {
    newVal = mean_reversion(
      params,
      setParams,
      lastVal,
      speed,
      returnVal,
      selectedDistribution
    );
  } else if (selectedModel === "GARCH(1,1)") {
    newVal = garch(
      params,
      setParams,
      lastVal,
      speed,
      returnVal,
      selectedDistribution,
      garchSigma,
      setGarchSigma
    );
  } else {
    newVal = lastVal.current;
  }

  const currentDateTime = new Date();
  const resultInSeconds =
    (currentDateTime.getTime() - new Date().getTimezoneOffset() * 60 * 1000) /
    1000;

  lineSeries.current.update({
    value: newVal,
    time: resultInSeconds,
  });

  const container = document.getElementById("container");

  if (container.lastChild.className === "watermark") {
    container.removeChild(container.lastChild);
  }
};

export { generateNewData };
