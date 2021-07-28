import React, { useState, useEffect } from "react";

const Ejercicio6 = () => {
  const [textInput, setTextInput] = useState("");

  const handleChange = (ev) => {
    const inputValue = ev.target.value;
    setTextInput(inputValue);
  };

  //recogemos el valor. Añadimos [] para que se ejecute solo 1 vez
  useEffect(() => {
    const textInput = localStorage.getItem("TextInput");
    if (textInput) {
      setTextInput(textInput);
    }
  }, []);

  //Guarda el valor. Cada vez que se modifique, el useEffect se vuelve a modificar. Añadimos [textInput] para que se ejecute cada vez que cambie esa variable
  useEffect(() => localStorage.setItem("TextInput", textInput), [textInput]);

  return (
    <div>
      <h3>Ejercicio 6</h3>
      <input
        placeholder="Introduce un texto"
        type="text"
        onChange={handleChange}
        value={textInput}
      />
      <p>{textInput}</p>
    </div>
  );
};

export default Ejercicio6;
