import { useState } from "react";
import PropTypes from "prop-types";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handelEditClick = () => {
    setIsEditing((prev) => {
      return !prev;
    });
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="plyer-symbol">{symbol}</span>
      </span>

      <button onClick={handelEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};

Player.propTypes = {
  symbol: PropTypes.string.isRequired,
  initialName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onChangeName: PropTypes.func.isRequired,
};

export default Player;

