import React from "react";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Heading 1"),
    React.createElement("p", null, "This is the first paragraph."),
    React.createElement("h1", null, "Heading 2"),
    React.createElement("p", null, "This is the second paragraph.")
  );
}

export default App;
