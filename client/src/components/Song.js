import React from "react";

const padTime = string => (new Array(3).join("0") + string).slice(-2);
const timeDisplay = seconds => {
  const minutes = Math.floor(seconds / 60);
  return [(padTime(), padTime(seconds - minutes * 60))].join(":");
};

const Song = ({ name, description, durationInSeconds }) => (
  <div>
    <h5>{name}</h5>
    <strong>Length:</strong> {timeDisplay(durationInSeconds)}
    <p>{description}</p>
  </div>
);

export default Song;
