import ModelParametersContainer from "./ModelParametersContainer";
import { modelList, distributionList } from "../data/modelParameters";

const ModelContainer = ({
  params,
  setParams,
  selectedModel,
  setSelectedModel,
  selectedDistribution,
  setSelectedDistribution,
}) => {
  const renderInput = (param) => {
    return <option key={param}>{param}</option>;
  };

  const models = modelList.map((model) => Object.keys(model)[0]);
  const distributions = distributionList;

  return (
    <div className="model-container">
      <section className="model-selection">
        <p>Select a model:</p>
        <select
          name="model-select"
          id="model-select"
          className="model-select"
          onChange={(e) => {
            setSelectedModel(e.target.value);
            if (e.target.value === "GARCH(1,1)") {
              setParams({
                ...params,
                volatility: 0.5,
                scale: 0.25,
                gamma: 0.25,
              });
            }
          }}>
          {models.map((model) => renderInput(model))}
        </select>
        <p>Select a distribution:</p>
        <select
          name="dist-select"
          id="dist-select"
          className="model-select"
          onChange={(e) => {
            setSelectedDistribution(e.target.value);
          }}>
          {distributions.map((model) => renderInput(model))}
        </select>
      </section>

      <ModelParametersContainer
        params={params}
        setParams={setParams}
        selectedModel={selectedModel}
        selectedDistribution={selectedDistribution}
      />
    </div>
  );
};

export default ModelContainer;
