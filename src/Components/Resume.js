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

    const Feature = this.props.data.Feature;

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
                <div className="twelve columns">
                  <div key={Feature[0].name} className="six columns">
                    <h3>{Feature[0].name}</h3>
                    <p className="date">
                      {Feature[0].description} <span></span>
                      <em className="date">{Feature[0].graduated}</em>
                    </p>
                  </div>
                  <div key={Feature[0].name + "img"} className="six columns">
                    <img width="200px" src={"images/accelerator.jpg"}></img>
                  </div>
                </div>
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

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <div key={Feature[1].name} className="six columns">
                    <h3>{Feature[1].name}</h3>
                    <p className="date">
                      {Feature[1].description} <span></span>
                      <em className="date">{Feature[1].graduated}</em>
                    </p>
                  </div>
                  <div key={Feature[1].name + "img"} className="six columns">
                    <img width="200px" src={"images/notification.png"}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
