import React, { useState, useEffect } from "react";

const Ejemplo1 = () => {
  // usamos el hook useState para crear counter en el estado del componente
  const [counter, setCounter] = useState(0);
  // usamos el hook useEffect para gestionar los ciclos de vida del componente
  useEffect(() => {
    // las 3 siguientes líneas se ejecutan al montar y renderizar el componente
    let intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    // la función retornada a continuación se ejecuta al desmontar y renderizar el componente
    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div>
      <h3>Ejemplo 1</h3>
      <p>Contador: {counter}</p>
    </div>
  );
};

export default Ejemplo1;
