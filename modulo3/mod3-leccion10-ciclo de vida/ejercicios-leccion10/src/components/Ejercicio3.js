import React, { useState, useEffect } from "react";

const Ejercicio3 = () => {
  const [counter, setCounter] = useState(0);
  //console.log("Me estoy renderizando");

  useEffect(() => {
    //console.log("Me estoy montando");
    let intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      //console.log("Me estoy desmontando");
      clearInterval(intervalId);
    };
  });

  return (
    <div>
      <h3>Ejercicio 3</h3>
      <p>Contador: {counter}</p>
    </div>
  );

  //Se ejecuta en el orden desmontar, montar y renderizar
};

export default Ejercicio3;
