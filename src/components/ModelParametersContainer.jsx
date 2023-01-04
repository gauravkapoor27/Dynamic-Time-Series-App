import React from "react";
import modelParameterFilter from "../utils/modelParameterFilter";

const ModelParametersContainer = ({ params, setParams, selectedModel }) => {
  const renderInput = (param) => {
    return (
      <div key={param.name}>
        <p className="parameter-name">
          {param.name}: {params[param.name].toFixed(2)}
        </p>
        <input
          type="range"
          min={param.min}
          max={param.max}
          value={params[param.name] * param.scale}
          onChange={(e) => {
            setParams({
              ...params,
              [param.name]: e.target.value / param.scale,
            });
          }}
        />
      </div>
    );
  };

  const paramsList = modelParameterFilter(selectedModel);

  return (
    <div className="params-container">
      {paramsList.map((param) => renderInput(param))}
    </div>
  );
};

export default ModelParametersContainer;
