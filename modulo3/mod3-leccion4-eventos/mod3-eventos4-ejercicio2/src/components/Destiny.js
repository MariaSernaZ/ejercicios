import React from "react";

class Destiny extends React.Component {
  render() {
    const onChangeListener = (ev) => {
      alert(`Tu destino es viajar a ${ev.target.value}`);
    };

    return (
      <select onChange={onChangeListener}>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    );
  }
}

export default Destiny;
