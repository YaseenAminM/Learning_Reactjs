import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
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
            <Button
              onClick={handlePrevious}
              textColor={"#fff"}
              bgColor={"#7950f2"}
              text={"Previous"}
            />
            <Button
              onClick={handleNext}
              textColor={"#fff"}
              bgColor={"#7950f2"}
              text={"Next"}
            />
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, text }) {
  return (
    <button
      style={{
        color: textColor,
        backgroundColor: bgColor,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
