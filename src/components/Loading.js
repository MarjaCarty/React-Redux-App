import React from "react";
import img from "../assets/pikachu2.gif";

export default function Loading() {
  return (
    <div>
      <h1>Loading...</h1>
      <img src={img} />
    </div>
  );
}
