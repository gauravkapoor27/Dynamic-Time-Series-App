import React from "react";
import modelParameterFilter from "../utils/modelParameterFilter";

const ModelParametersContainer = ({
  params,
  setParams,
  selectedModel,
  selectedDistribution,
}) => {
  const renderInput = (param) => {
    return (
      <div key={param.name}>
        <p className="parameter-name">
          {param.name}: {params[param.name].toFixed(2)}
        </p>
        <input
          type="range"
          min={
            selectedModel === "GARCH(1,1)" &&
            ["volatility", "scale"].includes(param.name)
              ? 0
              : param.min
          }
          max={
            selectedModel === "GARCH(1,1)" &&
            ["volatility", "scale"].includes(param.name)
              ? param.name === "volatility"
                ? 1000
                : 500
              : param.max
          }
          value={params[param.name] * param.scale}
          className={`slider-${param.name}`}
          onChange={(e) => {
            setParams({
              ...params,
              [param.name]: e.target.value / param.scale,
            });
            if (
              e.target.className === "slider-alpha1" &&
              params.alpha1 + params.beta1 > 0.95
            ) {
              setParams({
                ...params,
                beta1: 0.95 - params.alpha1,
              });
            } else if (
              e.target.className === "slider-beta1" &&
              params.alpha1 + params.beta1 > 0.95
            ) {
              setParams({
                ...params,
                alpha1: 0.95 - params.beta1,
              });
            }
          }}
        />
      </div>
    );
  };

  const paramsList = modelParameterFilter(selectedModel, selectedDistribution);

  return (
    <div className="params-container">
      {paramsList.map((param) => renderInput(param))}
    </div>
  );
};

export default ModelParametersContainer;
