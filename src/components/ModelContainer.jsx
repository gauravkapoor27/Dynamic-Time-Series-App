import ModelParametersContainer from "./ModelParametersContainer";
import { modelList } from "../data/modelParameters";

const ModelContainer = ({
  params,
  setParams,
  selectedModel,
  setSelectedModel,
}) => {
  const renderInput = (param) => {
    return <option key={param}>{param}</option>;
  };

  const models = modelList.map((model) => Object.keys(model)[0]);

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
          }}>
          {models.map((model) => renderInput(model))}
        </select>
      </section>

      <ModelParametersContainer
        params={params}
        setParams={setParams}
        selectedModel={selectedModel}
      />
    </div>
  );
};

export default ModelContainer;
