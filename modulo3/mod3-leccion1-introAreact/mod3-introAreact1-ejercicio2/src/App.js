import React from "react";
import foto from "./teambuilding.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

/*Vamos a crear un nuevo proyecto de React llamado mediacard. Vamos a maquetar esta tarjeta dentro del componente App.js para que tenga un diseño lo más parecido posible al de la imagen. Podéis usar una imagen a vuestra elección en lugar de la que aparece en el diseño, y Font-Awesome para el icono del corazón. De esta forma, aprenderemos a cómo trabajar con cosas que ya conocemos (HTML y CSS) en una aplicación de React.*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="App-foto" alt="foto" />
        <div className="App-header-title">
          <h1 className="App-header-maintitle">María Serna</h1>
          <h3 className="App-header-subtitle">Lunes 31 de mayo de 2021</h3>
        </div>
      </header>
      <main className="App-main">
        <p className="App-main-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </main>
      <footer className="App-footer">
        <p className="App-footer-paragraph">Leer más...</p>
        <div className="App-footer-container">
          <p className="App-footer-paragraph">37</p>
          <FontAwesomeIcon icon={faHeart} className="App-icon" />
        </div>
      </footer>
    </div>
  );
}

export default App;
