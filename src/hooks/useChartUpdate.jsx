import { generateNewData } from "../utils/generateNewData";
import { useEffect, useRef } from "react";

let interval = null;

const useChartUpdate = (
  playState,
  lastVal,
  lineSeries,
  params,
  setParams,
  speed,
  selectedModel,
  selectedDistribution
) => {
  const returnRef = useRef(0);

  useEffect(() => {
    if (playState) {
      interval = setInterval(() => {
        generateNewData(
          lastVal,
          lineSeries,
          params,
          setParams,
          speed,
          selectedModel,
          selectedDistribution,
          returnRef
        );
      }, speed);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    playState,
    speed,
    params,
    setParams,
    lastVal,
    lineSeries,
    selectedModel,
    selectedDistribution,
    returnRef,
  ]);
};

export { useChartUpdate };
