import React, { useState } from "react";
import Form from "./Form";

// Change to true to see a new page when it's login
var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      <Form
        isRegistered
      />
    </div>
  );
}

export default App;
