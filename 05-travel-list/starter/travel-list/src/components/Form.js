import { useState } from "react";

export default function Form({ onAdditems }) {
  // State
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Handler Function
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      package: false,
      id: Date.now() + Math.random(),
    };

    onAdditems(newItem);
    handleResetForm();
  }

  function handleResetForm() {
    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((option) => {
          return (
            <option value={option} key={option + Math.random()}>
              {option}
            </option>
          );
        })}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}
