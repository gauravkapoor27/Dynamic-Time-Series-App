import "./assets/css/App.css";
import ChartContainer from "./components/ChartContainer";
import ChartInteractionPanel from "./components/ChartInteractionPanel";
import ModelContainer from "./components/ModelContainer";
import Watermark from "./components/Watermark";
import { parameters } from "./data/modelParameters";

import { useState, useRef } from "react";

import { useChartUpdate } from "./hooks/useChartUpdate";
import { useCreateChart } from "./hooks/useCreateChart";

function App() {
  const [playState, setPlayState] = useState(true);
  const [speed, setSpeed] = useState(500);
  const [params, setParams] = useState(parameters);
  const [selectedModel, setSelectedModel] = useState("Brownian Motion");
  const [selectedDistribution, setSelectedDistribution] = useState("Normal");

  const lineSeriesRef = useRef(null);
  const lastValRef = useRef(null);

  useCreateChart(lineSeriesRef, lastValRef);
  useChartUpdate(
    playState,
    lastValRef,
    lineSeriesRef,
    params,
    setParams,
    speed,
    selectedModel,
    selectedDistribution
  );

  return (
    <section className="main">
      <ModelContainer
        params={params}
        setParams={setParams}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        selectedDistribution={selectedDistribution}
        setSelectedDistribution={setSelectedDistribution}
      />
      <ChartContainer />
      <ChartInteractionPanel
        playState={playState}
        setPlayState={setPlayState}
        lineSeriesRef={lineSeriesRef}
        lastValRef={lastValRef}
        speed={speed}
        setSpeed={setSpeed}
      />
      <Watermark selectedModel={selectedModel} />
    </section>
  );
}

export default App;

