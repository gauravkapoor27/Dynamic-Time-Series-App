import { generateNewData } from "../utils/generateNewData";
import { useEffect } from "react";

let interval = null;

const useChartUpdate = (
  playState,
  lastVal,
  lineSeries,
  params,
  setParams,
  speed,
  selectedModel
) => {
  useEffect(() => {
    if (playState) {
      interval = setInterval(() => {
        generateNewData(
          lastVal,
          lineSeries,
          params,
          setParams,
          speed,
          selectedModel
        );
      }, speed);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [playState, speed, params, setParams, lastVal, lineSeries, selectedModel]);
};

export { useChartUpdate };
