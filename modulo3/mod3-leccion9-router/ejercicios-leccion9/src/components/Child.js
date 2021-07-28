import React from "react";

class Child extends React.Component {
  render() {
    const childId = this.props.match.params.id;
    return <p>This is child number {childId}</p>;
  }
}
export default Child;
