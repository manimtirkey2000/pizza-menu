import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Importing CSS styles
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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const styles = {};
  return (
    <header className="header">
      <h1 style={styles}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzaCount = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All
          organic ingredients, cooked with love.
        </p>
        {pizzaCount > 0 ? (
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                pizzaObj={pizza} // Passing the entire pizza object
                key={pizza.name} // Using name as a unique key
              />
            ))}
          </ul>
        ) : (
          <p>We are still working on our menu. Please come back later!</p>
        )}
        {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="starter/pizzas/spinaci.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="starter/pizzas/margherita.jpg"
        price={10}
      /> */}
      </>
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //   if (pizzaObj.soldOut) {
  //     return null;
  //   }

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  //   console.log(`Current hour: ${hour}`);

  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00.
          Please come back later!
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        Open from {props.openHour}:00 to {props.closeHour}:00. Come visit us or
        order online!
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Strict Mode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants. It does not render any visible UI.
