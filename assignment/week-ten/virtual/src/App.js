import React, { useState, useRef } from "react";

function App() {

  const [title, setTitle] = useState("Hello React");
  const [reactUpdates, setReactUpdates] = useState(0);

  const vanillaUpdates = useRef(0);


  const changeTitleReact = () => {
    setTitle((prev) => (prev === "Hello React" ? "React Updated!" : "Hello React"));
    setReactUpdates((count) => count + 1);
   
  };


  const changeTitleVanilla = () => {

    const titleElement = document.getElementById("page-title");
    if (titleElement.textContent === "Hello Vanilla JS") {
      titleElement.textContent = "Vanilla JS Updated!";
    } else {
      titleElement.textContent = "Hello Vanilla JS";
    }
    vanillaUpdates.current++;
   
    setDummy((d) => d + 1);
  };

  const [dummy, setDummy] = useState(0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Virtual DOM vs Traditional DOM Demo</h2>

 
      <h3 id="react-title">React Title: {title}</h3>
      <button onClick={changeTitleReact}>Change Title (React)</button>
      <p>React DOM updates: {reactUpdates}</p>

      <hr />

      <h3 id="page-title">Hello Vanilla JS</h3>
      <button onClick={changeTitleVanilla}>Change Title (Vanilla JS)</button>
      <p>Vanilla JS DOM updates: {vanillaUpdates.current}</p>

      <hr />
      <p>
        React uses Virtual DOM to batch and efficiently update only what's necessary,
        while Vanilla JS directly manipulates the DOM every time.
      </p>
    </div>
  );
}

export default App;
