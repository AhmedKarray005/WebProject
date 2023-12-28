// RecentCard.js
import React from "react";
import { list } from "../data/Data";
import "./design.css";

const Abb = () => {
  const handleReadMoreClick = (url) => {
    window.open(url, "_blank"); // "_blank" opens the link in a new tab
  };

  return (
    <div className="content grid2 mtop">
      {list.map((val, index) => {
        const { cover, name, type, link } = val;
        return (
          <div className="box shadow" key={index}>
            <div className="img">
              <img src={cover} alt="" />
            </div>
            <div className="text">
              <div className="category flex">
                <i className="fa fa-heart"></i>
              </div>
              <h4>{name}</h4>
            </div>
            <div className="button flex">
              <div>
                <button
                  className="btn-read-more"
                  onClick={() => handleReadMoreClick(link)}
                >
                  Read More
                </button>
              </div>
              <span>{type}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Abb;
