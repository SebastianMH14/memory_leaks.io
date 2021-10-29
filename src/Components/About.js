import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const team = this.props.data.team;

    const printSocial = function(user){
      return (user.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      }));
    };

    const users = team.map(function (user) {
      return (
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={"images/" + user.image}
              alt={user.name}
            />
          </div>
          <div className="nine columns main-col">
            <h2>{user.name}</h2>

            <span>
            {user.desc} from {user.address.city}, {user.address.state}
            </span>
            <p>{user.bio}</p>

            <div className="row">
              <div className="columns contact-details">
                <h4>Contact Details</h4>
                <ul className="social-links">
                {printSocial(user)}
                </ul>
              </div>
            </div>

            <br />
          </div>
        </div>
      )
    });
    

    return (
      <section id="about">
        <Fade duration={1000}>{users}</Fade>
      </section>
    );
  }
}

export default About;
