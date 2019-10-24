import React from "react";
import Display from "./Display";

const Api_Key = "798fedb7c4d7617458edf84cb603ed6b";

class Form extends React.Component {
  state = {
    temp: "",
    cond: "",
    humi: ""
  };

  handleInputChange = event => {
    let adress = event.target.value;

    console.log("adress: " + adress);
  };

  getWeather = async e => {
    // const country = e.target.elements.country.value;

    e.preventDefault();
    const country = e.target.country.value;
    const city = e.target.city.value;

    console.log("city: " + city);
    console.log("country: " + country);
    console.log("e: " + e.target);

    const fech = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}uk&appid=${Api_Key}`
    );
    console.log("fech: " + fech.status);

    const data = await fech.json();
    console.log("data: " + data);

    this.setState({
      temp: data.main.temp,
      cond: data.weather[0].main,
      humi: data.main.humidity
    });
    console.log(data);
  };

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.getWeather}>
          <label>City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            onChange={this.handleChange}
          />

          <label>Country</label>
          <input
            type="text"
            className="form-control"
            name="country"
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">get Weather</button>
        </form>
        <Display
          temp={this.state.temp}
          cond={this.state.cond}
          humi={this.state.humi}
        />
      </div>
    );
  }
}

export default Form;
