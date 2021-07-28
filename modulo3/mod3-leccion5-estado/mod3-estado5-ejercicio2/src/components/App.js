import React from "react";
import "../stylesheets/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: "blueBox",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      let nextStyling;
      if (prevState.styling === "blueBox") {
        nextStyling = "redBox";
      } else {
        nextStyling = "blueBox";
      }

      return {
        styling: nextStyling,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div className={this.state.styling} onClick={this.handleClick}></div>
      </div>
    );
  }
}

export default App;
