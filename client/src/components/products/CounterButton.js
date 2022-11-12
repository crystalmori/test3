import React, { useState } from "react";

function CounterButton() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  if (counter < 0) {
    decrementCounter = () => {
      setCounter(0);
    };
  }

  const handleChange = (event) => {
    event.preventDefault();
    setCounter(event.target.value);
  };

  return (
    <>
      <button
        class="btn btn-outline-primary"
        type="button"
        onClick={decrementCounter}
      >
        -
      </button>

      <input
        type="text"
        class="form-control"
        value={counter}
        onChange={handleChange}
      />

      <button
        class="btn btn-outline-primary"
        type="button"
        onClick={incrementCounter}
      >
        +
      </button>
    </>
  );
}

export default CounterButton;
