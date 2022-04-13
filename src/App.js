import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";
import flowersData from "./data";

function App() {
  const numFlowers = 3;
  const [flowers, setFlowers] = useState(
    flowersData
      .slice(0, numFlowers)
      .sort((a, b) => a.name.localeCompare(b.name))
  );

  console.log(flowers);

  const cards = flowers.map((flower) => (
    <Card
      key={flower.id}
      name={flower.name}
      temperature={flower.temperature}
      description={flower.description}
      humidity={flower.humidity}
      image={flower.image}
    />
  ));

  return (
    <div>
      <h1>Your Herbarium</h1>
      <div className="cards">{cards}</div>
      <p className="count">
        Displaying {flowers.length} out of {flowersData.length} flowers
      </p>
    </div>
  );
}

export default App;
