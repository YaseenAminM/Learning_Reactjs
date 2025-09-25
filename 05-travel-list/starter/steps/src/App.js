const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  // Variable
  const step = 1;

  // Handler Function
  function handlePrevious() {
    alert("Previous");
  }
  function handleNext() {
    alert("Previous");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step === 1 ? "active" : null}`}>1</div>
        <div className={`${step === 2 ? "active" : null}`}>2</div>
        <div className={`${step === 3 ? "active" : null}`}>3</div>
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
        >
          Next
        </button>
      </div>
    </div>
  );
}
