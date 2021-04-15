import React from "react";
export default function About(props) {
  return (
    <div className="section" id={props.id}>
      {props.content}
    </div>
  );
}
