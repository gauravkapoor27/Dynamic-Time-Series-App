import { chartOptions, lineOptions } from "../data/chartDesignParams";
import { createChart } from "lightweight-charts";

const createPriceChart = (lineSeries, lastVal) => {
  const container = document.getElementById("container");
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  const chart = createChart(container, chartOptions);
  chart.resize(container.clientWidth, container.clientHeight);
  lineSeries.current = chart.addLineSeries(lineOptions);

  const currentDateTime = new Date();
  const resultInSeconds =
    (currentDateTime.getTime() - new Date().getTimezoneOffset() * 60 * 1000) /
    1000;
  const data = [{ value: 100, time: resultInSeconds }];
  lastVal.current = data[data.length - 1].value;

  lineSeries.current.setData(data);

  window.addEventListener("resize", () => {
    chart.resize(container.clientWidth, container.clientHeight);
  });
};

export { createPriceChart };
