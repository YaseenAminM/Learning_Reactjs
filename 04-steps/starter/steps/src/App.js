import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Challenge />
    </div>
  );
}

function Steps() {
  // State
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // Handler Function
  function handlePrevious() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      // GOOD PRACTICE
      setStep((step) => step + 1);

      // BAD PRACTICE
      // setStep(step + 1);
    }
  }

  function handlerIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="close" onClick={handlerIsOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : null}`}>1</div>
            <div className={`${step >= 2 ? "active" : null}`}>2</div>
            <div className={`${step >= 3 ? "active" : null}`}>3</div>
          </div>

          <p className="message">Step {messages[step - 1]}</p>

          <div className="buttons">
            <button
              style={{
                color: "#fff",
                backgroundColor: "#7950f2",
              }}
              // Mouse Click Event
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{
                color: "#fff",
                backgroundColor: "#7950f2",
              }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Challenge() {
  // State
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  let date = new Date("2027-06-21");
  date.setDate(date.getDate() + count);

  function handleStepsIncrement() {
    setSteps((steps) => steps + 1);
  }
  function handleStepsDecrement() {
    setSteps((steps) => steps - 1);
  }

  function handleCountIncrement() {
    setCount((count) => count + steps);
  }
  function handleCountDecrement() {
    setCount((count) => count - steps);
  }

  return (
    <div
      className="challenge-container"
      style={{
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="step-container"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          style={{
            height: "max-content",
          }}
          onClick={handleStepsDecrement}
        >
          -
        </button>
        <p
          style={{
            margin: "0",
          }}
        >
          Step :{steps}
        </p>
        <button
          style={{
            height: "max-content",
          }}
          onClick={handleStepsIncrement}
        >
          +
        </button>
      </div>

      <div
        className="count-container"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          style={{
            height: "max-content",
          }}
          onClick={handleCountDecrement}
        >
          -
        </button>
        <p
          style={{
            margin: "0",
          }}
        >
          Count : {count}
        </p>
        <button
          style={{
            height: "max-content",
          }}
          onClick={handleCountIncrement}
        >
          +
        </button>
      </div>

      <p>
        {count === 0
          ? "Today "
          : count > 1
          ? `${count} days day from todays is `
          : `${count} day from todays is `}
        {date.toDateString()}
      </p>
    </div>
  );
}
