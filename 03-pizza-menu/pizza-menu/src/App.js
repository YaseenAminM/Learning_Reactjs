import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // in-line style
  // const style = {
  //   color: "red",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };
  return (
    <div className="header">
      <h1>Fast React Pizza Co.</h1>
    </div>
  );
}
function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine 6 creative dishes to choose from. All from
            out stone oven, all organic all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.ingredients} />;
            })}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (props.pizzaObj.soldOut) return;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? `sold-out` : null}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* First Approch Text conditional  */}
        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        {/* Second Approch Text conditional  */}
        <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const OpenHour = 24;
  const closeHour = 24;
  const isOpen = hour >= OpenHour && hour <= closeHour;

  // if (isOpen) {
  //   alert("We're currently open");
  // } else {
  //   alert("Sorry we're closed");
  // }

  // if (!isOpen) {
  //   return <p>CLOSED</p>;
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} OpenHour={OpenHour} />
      ) : (
        <p>
          We're happy to welcome you between {OpenHour}:00 and {closeHour}
        </p>
      )}
    </footer>
  );
}

function Order({ OpenHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {OpenHour}:00 to {closeHour}:00 Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
