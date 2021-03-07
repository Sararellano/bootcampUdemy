import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import Email from "@material-ui/icons/Email";

function Header(props) {
  return (
    <header>
      <h1>
        <HighlightIcon />
        {props.name}
      </h1>
      <p>
        <Email />
        {props.email}
      </p>
    </header>
  );
}

export default Header;
