import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Mobile Charger", quantity: 12, packed: true },
];

export default function App() {
  // State
  const [items, setItems] = useState(initialItems);

  // handler for adding items in the items state array
  function handleAdditems(item) {
    setItems((items) => [...items, item]);
  }

  // handler to delete items from the items state array
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // handler to check the packed items
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAdditems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItems}
      />
      <Status />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}
function Form({ onAdditems }) {
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
function PackingList({ items, onDeleteItems, onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <Item
              onDeleteItems={onDeleteItems}
              onToggleItems={onToggleItems}
              key={item.id}
              item={item}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItems(item.id)}
      />

      <span
        style={
          item.packed
            ? {
                textDecoration: "line-through",
              }
            : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          onDeleteItems(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}

function Status() {
  return (
    <footer className="stats">
      <em>You have X itemson your list, and you already packed X (X%%)</em>
    </footer>
  );
}
