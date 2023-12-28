import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
        <Heading
            title="Meet Our Software Engineering Team"
            subtitle={
              <>
                Embark on a journey to discover our first web project, crafted
                by the ingenious minds of our software engineering team.
                <br />
                Uncover the creativity, innovation, and passion that drive our
                team towards excellence.
              </>
            }
          />

          <div className="content mtop grid3">
            {team.map((val, index) => (
              <div className="book" key={index}>
                <p>
                  <div className="details">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <i className="fa fa-location-dot"></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>

                    <ul>
                      {val.icon.map((icon, index) => (
                        <li key={index}>{icon}</li>
                      ))}
                    </ul>
                    <div className="button flex">
                      <button className="btn3">
                        <i className="fa fa-envelope"></i>
                        Message
                      </button>
                      <button className="btn4">
                        <i className="fa fa-phone-alt"></i>
                      </button>
                    </div>
                  </div>
                </p>
                <div className="cover">
                  <h4>{val.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
