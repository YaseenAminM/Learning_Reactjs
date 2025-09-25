import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Mobile Charger", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Status />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[1].value);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((option) => {
          return (
            <option value={option} key={option + Math.random()}>
              {option}
            </option>
          );
        })}
      </select>

      <input type="text" placeholder="Item..." />

      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <Item key={Math.random() + item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
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
      <span>❌</span>
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
