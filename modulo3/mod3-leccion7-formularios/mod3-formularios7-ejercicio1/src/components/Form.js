import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    nombre: "",
    descripción: "",
    idioma: "",
  });

  const handleInput = (event) => {
    // console.log(event.target.nombre)
    setData({
      ...data,
      nombre: event.target.value,
    });
  };

  const handleTextarea = (event) => {
    console.log(event.target);
    setData({
      ...data,
      descripción: event.target.value,
    });
  };

  const handleSelect = (ev) => {
    console.log(ev.target);
    setData({
      ...data,
      idioma: ev.target.value,
    });
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log(
      `enviando datos... ${data.nombre} ${data.descripción} ${data.idioma}`
    );
  };

  const handleButton = (ev) => {
    setData({
      nombre: "",
      descripción: "",
      idioma: "",
    });
  };

  return (
    <>
      <h1>Formulario</h1>
      <form onSubmit={handleForm}>
        <div className="input-container">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            className="form-imput"
            onChange={handleInput}
            value={data.nombre}></input>
        </div>
        <div className="textarea-container">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            onChange={handleTextarea}
            value={data.descripción}>
            {data.descripción}
          </textarea>
        </div>
        <div className="textarea-container">
          <select htmlFor="description" onChange={handleSelect}>
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
        </div>
        <button type="submit" className="submit-button" onClick={handleButton}>
          Reset
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
