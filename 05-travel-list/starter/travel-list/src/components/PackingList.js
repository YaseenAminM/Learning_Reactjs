import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearItemsState,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "decription")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
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

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="decription">Sort by description</option>
          <option value="packed">Sort by Packted Status</option>
        </select>
        <button onClick={onClearItemsState}>Clear</button>
      </div>
    </div>
  );
}
