import PropTypes from "prop-types";

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

Log.propTypes = {
  turns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Log;
