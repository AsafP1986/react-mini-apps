import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
  }

  ComponentDidMuont() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        this.setState({
          allMemeImgs: response.data.memes
        });
        console.log(this.state.allMemeImgs);
      });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1> MemeGenerator </h1>
        <form>
          <input
            type="text"
            name="topText"
            placeholder="Top text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="bottom text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default MemeGenerator;
