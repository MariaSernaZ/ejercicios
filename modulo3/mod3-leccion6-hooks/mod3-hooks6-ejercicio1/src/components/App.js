import React, { useState } from "react";
import "../stylesheets/App.css";

function App() {
  const [ageCount, setAge] = useState(20);

  const handleClickMore = () => {
    setAge(ageCount + 1);
  };

  const handleClickLess = () => {
    setAge(ageCount - 1);
  };

  return (
    <div className="App">
      <p>Hola Mundo, hoy tengo {ageCount} años de edad</p>
      <button onClick={handleClickMore}>Hazme más viejo</button>
      <button onClick={handleClickLess}>Hazme menos viejo</button>
    </div>
  );
}

export default App;
