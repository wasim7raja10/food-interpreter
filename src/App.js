import { useState } from "react";
import "./App.css";
import { foodEmoji } from "./data/emoji";

const emojis = Object.keys(foodEmoji);

function App() {
  const [emoji, setEmoji] = useState("");
  const [output, setOutput] = useState("Input is invalid");
  const onChangeHandler = (event) => {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (!(inputEmoji in Object.values(foodEmoji))) {
      setOutput("Invalid Input");
      return;
    }
    setOutput(foodEmoji[inputEmoji]);
  };
  const onClickHandler = (emoji) => {
    setEmoji(emoji);
    setOutput(foodEmoji[emoji]);
  };
  return (
    <div className="App">
      <h1>Food - Interpreter</h1>
      <input
        placeholder="Search your food emoji"
        value={emoji}
        onChange={onChangeHandler}
      />
      <h2>{emoji}</h2>
      <h1>{output}</h1>
      <div className="emojis">
        <h2>you can search these emoji</h2>
        <div>
          {emojis.map((emoji, index) => (
            <span key={index} onClick={() => onClickHandler(emoji)}>
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
