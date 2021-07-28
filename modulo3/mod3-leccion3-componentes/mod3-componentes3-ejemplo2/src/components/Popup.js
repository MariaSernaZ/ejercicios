import React from "react";

class Popup extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div className="popup__content">{this.props.children}</div>
      </div>
    );
  }
}

export default Popup;
