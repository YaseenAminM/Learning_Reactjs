import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Status from "./Status";

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

  // hander to clear items state
  function handleClearItemsState() {
    if (window.confirm("Do you delete all the items from the list")) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAdditems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItems}
        onClearItemsState={handleClearItemsState}
      />
      <Status items={items} />
    </div>
  );
}
