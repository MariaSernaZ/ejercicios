import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    nombre: "",
    descripción: "",
    idioma: "",
    edad: "",
    género: "",
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

  const handleRadio = (ev) => {
    setData({
      ...data,
      edad: ev.target.value,
    });
  };

  const handleCheckbox = (ev) => {
    setData({
      ...data,
      género: ev.target.value,
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
            onChange={handleInput}
            value={data.nombre}></input>
        </div>
        <div className="textarea-container">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            onChange={handleTextarea}>
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
        <div className="radio-container">
          <h4>Edad</h4>
          <label htmlFor="age7">
            <input
              id="age7"
              type="radio"
              value="Todos los públicos"
              onChange={handleRadio}
              checked={data.género === "Todos los públicos"}
            />
            Todos los públicos
          </label>
          <label htmlFor="age7">
            <input id="age7" type="radio" value="7" onChange={handleRadio} />7
          </label>
          <label htmlFor="age12">
            <input id="age12" type="radio" value="12" onChange={handleRadio} />
            12
          </label>
          <label htmlFor="age16">
            <input id="age16" type="radio" value="16" onChange={handleRadio} />
            16
          </label>
          <label htmlFor="age18">
            <input id="age18" type="radio" value="18" onChange={handleRadio} />
            18
          </label>
        </div>
        <div className="checkbox-container">
          <h4>Género</h4>
          <label htmlFor="comedy">
            <input
              id="comedy"
              type="checkbox"
              value="Comedia"
              onChange={handleCheckbox}
            />
            Comedia
          </label>
          <label htmlFor="drama">
            <input
              id="drama"
              type="checkbox"
              value="Drama"
              onChange={handleCheckbox}
            />
            Drama
          </label>
          <label htmlFor="fantasy">
            <input
              id="fantasy"
              type="checkbox"
              value="Fantasía"
              onChange={handleCheckbox}
            />
            Fantasía
          </label>
          <label htmlFor="action">
            <input
              id="action"
              type="checkbox"
              value="Acción"
              onChange={handleCheckbox}
            />
            Acción
          </label>
          <label htmlFor="family">
            <input
              id="family"
              type="checkbox"
              value="Familia"
              onChange={handleCheckbox}
            />
            Familia
          </label>
          <label htmlFor="horror">
            <input
              id="horror"
              type="checkbox"
              value="Terror"
              onChange={handleCheckbox}
            />
            Terror
          </label>
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
      <ul>
        <li>{data.nombre}</li>
        <li>{data.descripción}</li>
        <li>{data.idioma}</li>
        <li>{data.edad}</li>
        <li>{data.género}</li>
      </ul>
    </>
  );
};

export default Form;
