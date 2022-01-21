import "./App.css";
import React, { useState } from "react";
import catagory from "../mocks/categoy.json";
import mockLists from "../mocks/lists.json";

function App() {
  const [list, setList] = useState(mockLists);
  const [inputValue, setInputValue] = useState("");
  const [selectButtonIndex, setSelectButtonIndex] = useState(0);
  const [selectOption, setSelectedOption] = useState("Regular");

  const removeHandler = (index) => {
    let newList = list;
    newList.splice(index, 1);
    setList([...newList]);
  };

  return (
    <div className="childContainer">
      <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <select
        onClick={(e) => {
          setSelectedOption(e.target.value);
        }}
      >
        {catagory.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          if (inputValue !== "") {
            setList([...list, { title: inputValue, category: selectOption }]);
            setInputValue("");
          }
        }}
      >
        ADD
      </button>
      <div className="catContainer">
        {catagory.map((value, index) => (
          <button
            className={selectButtonIndex === index ? "selectbutton" : "notSelectButton"}
            key={index}
            onClick={() => setSelectButtonIndex(index)}
          >
            {value}
          </button>
        ))}
        <div className="listContainer">
          <ul>
            {list.map((value, index) => (
              <>
                {value["category"] === catagory[selectButtonIndex] && (
                  <li key={index} onClick={() => removeHandler(index)}>
                    {value.title}
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
