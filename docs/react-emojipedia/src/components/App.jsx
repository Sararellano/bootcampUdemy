import React from "react";
// Emojis
import Entry from "./Entry";
import emojipedia from "../emojipedia";


// Function Emojis
function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}


function App() {
  return (
    <div>

      <dl className="dictionary">
        {emojipedia.map(emojiTerm => (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        ))}
      </dl>

    </div>
  );
}

export default App;
