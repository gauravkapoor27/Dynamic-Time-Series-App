import { useLayoutEffect } from "react";
import { createPriceChart } from "../utils/createPriceChart";

const useCreateChart = (lineSeries, lastVal) => {
  useLayoutEffect(() => {
    createPriceChart(lineSeries, lastVal);
  }, [lineSeries, lastVal]);
};

export { useCreateChart };
