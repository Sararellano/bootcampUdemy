import React from "react";

const number = 8,
  customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid blue"
  };

customStyle.border = "1px solid green";


function List() {
  return (
    <ul>
      <li style={{ color: "green" }}> Test 1 </li>
      <li style={customStyle}> Test 2 </li>
      <li> Test {number} </li>
    </ul>
  )
}

export default List;
