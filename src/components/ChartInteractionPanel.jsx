import { createPriceChart } from "../utils/createPriceChart";

const ChartInteractionPanel = ({
  playState,
  setPlayState,
  lineSeriesRef,
  lastValRef,
  speed,
  setSpeed,
}) => {
  return (
    <div className="chart-interaction">
      <button
        className="pause-button"
        onClick={() => setPlayState(!playState)}>
        {playState ? "Pause" : "Play"}
      </button>
      <button
        className="reset-button"
        onClick={() => {
          createPriceChart(lineSeriesRef, lastValRef);
        }}>
        Reset
      </button>
      <div className="speed-slider">
        <p>
          <strong>Adjust Speed:</strong>
        </p>
        <input
          type="range"
          min="1"
          max="100"
          label="Speed"
          value={Math.round(1000 / speed)}
          onChange={(e) => {
            setSpeed(1000 / e.target.value);
          }}
        />
        <p>{Math.round(1000 / speed)} ticks/s</p>
      </div>
    </div>
  );
};

export default ChartInteractionPanel;
