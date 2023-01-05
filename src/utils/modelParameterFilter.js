import { modelList, paramsList } from "../data/modelParameters";

const modelParameterFilter = (selectedModel, selectedDistribution) => {
  const modelName = modelList.find(
    (model) => Object.keys(model)[0] === selectedModel
  );

  let filteredParams = paramsList.filter((param) =>
    modelName[selectedModel].includes(param.name)
  );

  if (selectedDistribution === "Laplace") {
    const scaleParam = paramsList.find((param) => param.name === "scale");
    filteredParams = [scaleParam, ...filteredParams];
    filteredParams = filteredParams.filter(
      (param) => param.name !== "volatility"
    );
  }

  return filteredParams;
};

export default modelParameterFilter;
