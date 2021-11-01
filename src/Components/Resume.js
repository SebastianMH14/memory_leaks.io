import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;


    const Features = this.props.data.Features.map(function (Feature) {
      return (
        <Slide left duration={1300}>
          <div className="row education">

            <div className="three columns header-col">
              <h1>
                <span>{Feature.title}</span>
              </h1>
            </div>

            <div key={Feature.name} className="six columns">
              <h3>{Feature.name}</h3>
              <p className="date">
                {Feature.description} <span></span>
                <em className="date">{Feature.graduated}</em>
              </p>
            </div>

            <div key={Feature.name + "_img"} className="three columns img_container">
              <img width="200px" src={"images/" + Feature.image}></img>
            </div>

          </div>
        </Slide>
      );
    });

    return (
      <section id="resume">
        {Features}
      </section>
    );
  }
}

export default Resume;
