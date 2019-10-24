import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div>
        <label>Temprature: </label>
        <p id="tempDisplay">{this.props.temp}</p>
        <label>conditions: </label>
        <p id="conditions">{this.props.cond}</p>
        <label>humidity: </label>
        <p id="humidity">{this.props.humi}</p>
      </div>
    );
  }
}

export default Display;
