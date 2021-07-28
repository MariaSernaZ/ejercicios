import { useState } from "react";

function Ejercicio2() {
  const numbers = [1, 4, 6, 8, 45, 89];

  //Crearemos tantas variables como elementos a cambiar. Ej: input, lista de números...Además, cada vez que una variable estado cambia, se vuelve a ejecutar el render
  const [input, setInput] = useState();

  //filter nos devuleve un array nuevo con todos los elementos que cumplan la condición implementada y map nos devuelve el mismo array con la misma longitud
  const result = numbers
    .filter((number) => number > parseInt(input))
    .map((number) => {
      return <li>{number}</li>;
    });

  //cada vez que actualizamos con setInput el nuevo valor se guarda en la variable input
  const handleInput = (ev) => {
    setInput(ev.target.value);
  };

  return (
    <>
      <form>
        <p>Indica un número</p>
        <ul>{result}</ul>
        <input type="text" value={input} onChange={handleInput}></input>
      </form>
    </>
  );
}
export default Ejercicio2;
