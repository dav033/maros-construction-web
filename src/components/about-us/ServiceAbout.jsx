import image from "../../assets/images/rich-rhubbardstockfootage-Z2gExshMSCk-unsplash.jpg";
import React from "react";
import BricksIcon from "../../assets/icons/bricks.icon";

import "../../styles/serviceSection.css";

export default function ServiceAbout({ title, children, data }) {
  if (title) {
    return (
      <div className="serviceSection">
        <div className="servicesList">
          {data.map((item) => {
            const Icon = item.Icon;
            return (
              <a className="item" href="/">
                <Icon class="icon" />

                <h1>{item.title}</h1>
              </a>
            );
          })}
        </div>
        <div className="body">
          <h2>{title}</h2>

          <p>{children}</p>

          <button> DETAILS </button>
        </div>
      </div>
    );
  }
}
