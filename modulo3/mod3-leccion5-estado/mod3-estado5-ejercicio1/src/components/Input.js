import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
    };

    this.handleOnchange = this.handleOnchange.bind(this);
  }

  handleOnchange(ev) {
    this.setState({
      textInput: ev.target.value,
    });
  }

  render() {
    return (
      <>
        <input type="text" onChange={this.handleOnchange} />
        <p>{this.state.textInput}</p>
      </>
    );
  }
}

export default Input;
