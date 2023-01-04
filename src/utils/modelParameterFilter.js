import { modelList, paramsList } from "../data/modelParameters";

const modelParameterFilter = (selectedModel, selectedDistribution) => {
  const modelName = modelList.find(
    (model) => Object.keys(model)[0] === selectedModel
  );

  const filteredParams = paramsList.filter((param) =>
    modelName[selectedModel].includes(param.name)
  );

  if (selectedDistribution === "Laplace") {
    filteredParams.push(paramsList.find((param) => param.name === "scale"));
  }

  return filteredParams;
};

export default modelParameterFilter;
