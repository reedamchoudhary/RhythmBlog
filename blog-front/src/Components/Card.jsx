import React, { useContext } from "react";
import "./Components.css";
import { UserContext } from "../App";

const Card = (props) => {
  const { theme } = useContext(UserContext);
  const { title, description, engagement, date } = props;

  const onClickHandler = () => {
    console.log("clicked");
  };

  return (
    <div
      className="card"
      style={{
        padding: "10px",
        backgroundColor: theme
          ? "rgba(0, 0, 0, 0.6)"
          : "rgba(255, 255, 255, 0.6)",
      }}
      onClick={() => onClickHandler}
    >
      <h1 style={{ fontSize: "23px" }}>{title}</h1>
      <p
        style={{
          fontFamily: "Laila",
          fontSize: "13px",
          padding: "10px 0px",
          color: "#E9A1B2",
        }}
      >
        <i>
          {date} {engagement} {engagement ? "mins read" : ""}
        </i>
      </p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
