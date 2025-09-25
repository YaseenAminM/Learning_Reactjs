import React from "react";

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
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list">LIST</div>;
}
function Status() {
  return (
    <footer className="stats">
      <em>You have X itemson your list, and you already packed X (X%)</em>
    </footer>
  );
}
