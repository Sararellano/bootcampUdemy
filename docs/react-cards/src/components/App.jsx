import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";



function App() {
  return (
    <div>
      <Avatar img="https://pbs.twimg.com/profile_images/1104884286417715205/ZR7FQZXy_400x400.jpg" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
