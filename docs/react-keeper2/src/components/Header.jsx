import React from "react";

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </header>
  );
}

export default Header;
