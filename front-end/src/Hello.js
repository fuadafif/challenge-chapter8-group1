import React from "react";

function Hello(props) {
  const x = 10;
  const { type } = props;
  return (
    <>
      <h1>Hello 3</h1>
      <p>{type}</p>
    </>
  );
}

export default Hello;
