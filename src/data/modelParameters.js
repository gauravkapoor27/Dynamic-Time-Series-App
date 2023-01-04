const modelList = [
  { "Brownian Motion": ["volatility", "drift"] },
  { "White Noise": ["volatility", "mean level"] },
  { "Mean Reversion": ["volatility", "mean level", "reversion rate"] },
  { "Random Walk": [] },
];

const paramsList = [
  { name: "volatility", initial_val: 1, min: 0, max: 100000, scale: 1000 },
  { name: "drift", initial_val: 0, min: -100000, max: 100000, scale: 1000 },
  { name: "reversion rate", initial_val: 0.5, min: 0, max: 1000, scale: 1000 },
  {
    name: "mean level",
    initial_val: 0,
    min: -1000000,
    max: 1000000,
    scale: 1000,
  },
];

const parameters = {};

paramsList.forEach((param) => {
  parameters[param.name] = param.initial_val;
});

export { modelList, paramsList, parameters };
