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
    const Feature = this.props.data.Feature.map(function (Feature) {
      return (
        <div key={Feature.name}>
          <h3>{Feature.name}</h3>
          <p className="date">
            {Feature.description} <span></span>
            <em className="date">{Feature.graduated}</em>
          </p>
        </div>
      );
    });

    const Feature1 = this.props.data.Feature1.map(function (Feature1) {
      return (
        <div key={Feature1.name}>
          <h3>{Feature1.name}</h3>
          <p className="date">
            {Feature1.description}
            <span></span> <em className="date">{Feature1.years}</em>
          </p>
        </div>
      );
    });
    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Feature 1</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{Feature}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Feature 2</span>
              </h1>
            </div>

            <div className="nine columns main-col">{Feature1}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
