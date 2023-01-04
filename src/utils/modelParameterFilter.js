import { modelList, paramsList } from "../data/modelParameters";

const modelParameterFilter = (selectedModel) => {
  const modelName = modelList.find(
    (model) => Object.keys(model)[0] === selectedModel
  );

  const filteredParams = paramsList.filter((param) =>
    modelName[selectedModel].includes(param.name)
  );

  return filteredParams;
};

export default modelParameterFilter;
