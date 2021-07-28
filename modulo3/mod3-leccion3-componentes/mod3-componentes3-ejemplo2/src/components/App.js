import React from "react";
import Popup from "./Popup";

class App extends React.Component {
  render() {
    return (
      <div>
        <Popup title="Esto es un popup">
          <h3>Soy el título del contenido</h3>
          <p>Y yo el texto del contenido</p>
        </Popup>
      </div>
    );
  }
}

export default App;
