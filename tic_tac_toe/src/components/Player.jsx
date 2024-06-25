import { useState } from "react";
import PropTypes from "prop-types";

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const handelEditClick = () => {
    setIsEditing((prev) => {
      return !prev;
    });
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
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
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Player;

