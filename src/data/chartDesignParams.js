import { CrosshairMode } from "lightweight-charts";

const chartOptions = {
  layout: {
    textColor: "white",
    background: { type: "solid", color: "rgb(0,2,27)" },
  },
  grid: {
    vertLines: {
      color: "rgba(197, 203, 206, 0)",
    },
    horzLines: {
      color: "rgba(197, 203, 206, 0)",
    },
  },
  timeScale: {
    timeVisible: true,
    secondsVisible: true,
    borderVisible: true,
  },
  crosshair: {
    mode: CrosshairMode.Normal,
    style: 0,
    vertLine: {
      width: 1,
      color: "rgba(224, 227, 235, 0.1)",
      style: 0,
    },
    horzLine: {
      width: 1,
      color: "rgba(224, 227, 235, 0.1)",
      style: 0,
    },
  },
  leftPriceScale: {
    visible: false,
  },
  rightPriceScale: {
    visible: true,
    borderVisible: true,
  },
};

const lineOptions = {
  color: "rgb(50, 122, 155)",
  lineWidth: 2,
  crosshairMarkerVisible: true,
  crosshairMarkerRadius: 2,
  lastPriceAnimation: 1,
  priceLineVisible: false,
};

export { chartOptions, lineOptions };
