import React, { useState } from "react";
import "../stylesheets/App.css";

function App() {
  const [ageCount, setAge] = useState(20);
  const [giftCount, setGift] = useState(1);

  const handleClickAge = () => {
    setAge(ageCount + 1);
  };

  const handleClickGift = () => {
    setGift(giftCount + 1);
  };

  return (
    <div className="App">
      <p>Hola Mundo, hoy tengo {ageCount} años de edad</p>
      <button onClick={handleClickAge}>Hazme más viejo</button>
      <p>Tengo {giftCount} regalos</p>
      <button onClick={handleClickGift}>Dame regalos</button>
    </div>
  );
}

export default App;
