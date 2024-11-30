// import React from "react";
// import ReactDom from "react-dom/client";
// import PropTypes from "prop-types";
// import "./index.css";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   // const style = { color: "red", fontSize: "50px" };
//   return (
//     <header className="header">
//       <h1> Fast React Pizza CO.</h1>;
//     </header>
//   );
// }

// function Menu() {
//   const pizzas = pizzaData;
//   const numPizzas = pizzas.length;
//   return (
//     <main className="menu">
//       <h1>Our Menu</h1>

//       <>
//         <p>
//           lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
//           lorem lorem lorem lorem lorem
//         </p>
//         {numPizzas > 0 ? (
//           <ul className="pizzas">
//             {pizzaData.map((pizza) => (
//               <Pizza pizzaObj={pizza} key={pizza.name} />
//             ))}
//           </ul>
//         ) : (
//           <p> out of menu</p>
//         )}
//       </>

//       {/* <Pizza
//         name="Pizza Spinaci"
//         photo="pizzas/spinaci.jpg"
//         ingredients="Tomato, mozarella, spinach, and ricotta cheese"
//         price={10}
//       /> */}
//     </main>
//   );
// }
// function Pizza({ pizzaObj }) {
//   return (
//     <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
//       <img src={pizzaObj.photoName} alt={pizzaObj.name} />
//       <div>
//         <h3> {pizzaObj.name}</h3>
//         <p>{pizzaObj.ingredients}</p>
//         <span>{pizzaObj.soldOut ? "SOLD OUT " : pizzaObj.price}</span>
//       </div>
//     </li>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const opening = 12;
//   const closing = 23;
//   // if (hour >= opening && hour <= closing) alert("we're currently open !");
//   // else alert("sorry we are closed");
//   const isOpen = hour >= opening && hour <= closing;
//   console.log(isOpen);
//   console.log(isOpen);
//   let status = isOpen ? " we're currently opening  " : "we're currently closed";
//   return (
//     <footer className="footer">
//       {isOpen && (
//         <div className="order">
//           <p>{status}</p>
//           <button className="btn"> Order</button>
//         </div>
//       )}
//       {/* {new Date().toLocaleDateString() + status} */}
//     </footer>
//   );
//   //   return React.createElement("footer", null, "we're currently opening !");
// }

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<App />);

// react before v 18

import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <main className="main">
      <Photo source="pizzas/margherita.jpg" />
      <Info
        title="pizza pizza pizzzaaaa"
        paragraph="i love pizze , you love pizza , we love pizza"
      />
      <SkillList />
    </main>
  );
}

function Photo(props) {
  return <img className="image" src={props.source} alt="" />;
}
function Info({ title, paragraph }) {
  return (
    <div className="info">
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skills">
      <span>{skill}</span>
      <span>{level}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
