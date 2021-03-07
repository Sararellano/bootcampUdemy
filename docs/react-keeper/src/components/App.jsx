import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// La creamos dentro de App() y la ponemos como arrow function
// function createNotes(noteItem) {
//   return (
//     <Note
//       key={noteItem.key}
//       title={noteItem.title}
//       content={noteItem.content}
//     />
//   )
// }

function App() {
  return (
    <div>
      <Header
        name="Keeper from Sara"
        email="sararellano@gmail.com"
      />

      {/* {notes.map(createNotes)} */}

      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
