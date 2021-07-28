import React, { useState, useEffect } from "react";

const Ejemplo2 = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    // hacemos la llamada al servidor
    fetch("https://api.rand.fun/number/integer")
      .then((response) => response.json())
      .then((responseData) => {
        // y cuando responde el servidor guardamos los datos en el estado
        setData(responseData);
      });
  }, []); // y con este array vacío le decimos a React que solo ejecute este useEffect una vez

  return (
    <div>
      <h3>Ejemplo 2</h3>
      <p>Número aleatorio: {data.result}</p>
    </div>
  );
};

export default Ejemplo2;
