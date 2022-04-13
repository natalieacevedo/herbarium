import React, { useState } from "react";

function Card({ name, temperature, description, humidity, image }) {
  const [displayDescription, setDisplayDescription] = useState(false);

  function toggleDisplayInfo() {
    setDisplayDescription(!displayDescription);
    console.log(displayDescription);
  }

  return (
    <>
      <div
        className={`card ${displayDescription ? "squaredCorners" : ""}`}
        onClick={toggleDisplayInfo}
      >
        <div className="flowerInfo">
          <h2>{name}</h2>
          <span className="temperature">{`${temperature.toFixed(1)}ºC`}</span>
          <span className="humidity">{`${humidity}%`}</span>
        </div>

        <img
          className="flowerPhoto"
          width="136"
          height="136"
          src={image}
          alt={name}
        />
      </div>
      {displayDescription && <div className="description">{description}</div>}
    </>
  );
}

export default Card;
