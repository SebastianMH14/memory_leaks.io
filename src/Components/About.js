import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name1 = this.props.data.name1;
    const name2 = this.props.data.name2;
    const name3 = this.props.data.name3;
    const profilepic1 = "images/" + this.props.data.image1;
    const profilepic2 = "images/" + this.props.data.image2;
    const profilepic3 = "images/" + this.props.data.image3;
    const bio1 = this.props.data.bio1;
    const bio2 = this.props.data.bio2;
    const bio3 = this.props.data.bio3;
    const city1 = this.props.data.address.city1;
    const state1 = this.props.data.address.state1;
    const city2 = this.props.data.address2.city2;
    const state2 = this.props.data.address2.state2;
    const email1 = this.props.data.email1;
    const email2 = this.props.data.email2;
    const email3 = this.props.data.email3;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic1}
                alt="Salome"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Salomé Grisales</h2>

              <p>{bio1}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name1}</span>
                    <br />
                    <span>
                      {city1}, {state1}
                    </span>
                    <br />
                    <span>{email1}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic2}
                alt="Jerson"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Jerson Perez</h2>

              <p>{bio2}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name2}</span>
                    <br />
                    <span>
                      {city1}, {state2}
                    </span>
                    <br />
                    <span>{email2}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic3}
                alt="Sebastian"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Sebastian Molina</h2>

              <p>{bio3}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name3}</span>
                    <br />
                    <span>
                      {city2}, {state2}
                    </span>
                    <br />
                    <span>{email3}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
