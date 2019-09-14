import React from "react";
import logo from "../logo.svg";

// function Header(props) {
//   return (
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />{" "}
//       <span>{props.title}</span>
//     </header>
//   );
// }

// const Header = props => {
//   return (
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />{" "}
//       <span>{props.title}</span>
//     </header>
//   );
// };

const Header = props => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />{" "}
    <span>{props.title}</span>
  </header>
);

export default Header;
