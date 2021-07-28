import React from "react";
import "../stylesheets/App.css";
import HalfPage from "./HalfPage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Text">
        <HalfPage>
          <div className="Half">
            <h1>H1</h1>
            <p>Estoy en la izquierda</p>
          </div>
        </HalfPage>
        <HalfPage>
          <h2>H2</h2>
          <p>Estoy en la derecha</p>
        </HalfPage>
      </div>
    );
  }
}

export default App;
