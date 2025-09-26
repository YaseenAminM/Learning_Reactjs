export default function Status({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list</p>
    );

  // Derived States
  const totalItems = items.length;
  const totalPackedItems = items.filter((item) => item.packed).length;
  const percentage = (totalPackedItems / totalItems).toFixed(2) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready"
          : ` You have ${totalItems} itemson your list, and you already packed
        ${totalPackedItems} {${percentage}%}`}
      </em>
    </footer>
  );
}
