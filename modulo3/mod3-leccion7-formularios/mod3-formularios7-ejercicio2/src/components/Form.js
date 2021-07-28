import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    nombre: "",
    descripción: "",
    idioma: "",
  });

  //const [idioma, setIdioma] = useState("Español");

  const handleChange = (event) => {
    //console.log(event.target.nombre);
    if (event.target.name === "nombre") {
      setData;
    }
    setData({
      ...data,
      nombre: event.target.value,
      descripción: event.target.value,
      idioma: event.target.value,
    });
  };

  const sendData = (ev) => {
    ev.preventDefault();
    console.log(
      `enviando datos... ${data.nombre} ${data.descripción} ${data.idioma}`
    );
  };

  return (
    <>
      <h1>Formulario</h1>
      <form onSubmit={sendData}>
        <div className="input-container">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            className="form-imput"
            onChange={handleChange}
            value={data.nombre}></input>
        </div>
        <div className="textarea-container">
          <label htmlFor="description">Descripción</label>
          <textarea id="description" name="description" onChange={handleChange}>
            {data.descripción}
          </textarea>
        </div>
        <div className="textarea-container">
          <select
            htmlFor="description"
            value={data.idioma}
            onChange={handleChange}>
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
      <ul>
        <li>{data.nombre}</li>
        <li>{data.descripción}</li>
        <li>{data.idioma}</li>
      </ul>
    </>
  );
};

export default Form;
