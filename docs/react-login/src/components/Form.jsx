import React, { useState } from "react";

function Form(props) {

  const [headingText, setHeadingText] = useState('Form'),
    [isMouseOver, setMouseOver] = useState(false),
    [username, setUsername] = useState(''),
    [contact, setContact] = useState({ fName: '', sName: '', email: '' })

  function handleClick(event) {
    setHeadingText(`Form from ${username}`);

    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setUsername(event.target.value);
  }

  function handleChange2(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevValue.lName,
      //     email: prevValue.email
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: value,
      //     email: prevValue.email
      //   };
      // } else if (name === "email") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: prevValue.lName,
      //     email: value
      //   };
      // }

      // Borro lo anterior para poner un Spread Operator
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <form className="form" onSubmit={handleClick}>
      <h1> {headingText} </h1>
      <h2> Hello {contact.fName} {contact.lName} {`(${username})`} </h2>
      <p> {contact.email} </p>

      <input type="text" onChange={handleChange} value={username} placeholder="Username" />

      <input type="text" placeholder="First Name" onChange={handleChange2}
        value={contact.fName}
        name="fName" />

      <input type="text" placeholder="Last Name" onChange={handleChange2}
        value={contact.lName}
        name="lName" />

      <input type="email" placeholder="email" onChange={handleChange2}
        value={contact.email}
        name="email" />

      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit"
        style={{ backgroundColor: isMouseOver ? 'black' : 'white' }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >{props.isRegistered ? "Login" : "Register"}</button>

    </form>
  );
}

export default Form;
