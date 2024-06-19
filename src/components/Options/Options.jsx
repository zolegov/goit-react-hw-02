import css from "../Options/Options.module.css";

const Options = ({ updateFeedback, reset, totalFeedback }) => {
  return (
    <div>
      <button className="css.optionBtn" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
};
export default Options;
