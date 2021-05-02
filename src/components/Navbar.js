import React from "react";
import { useHistory } from "react-router";

function Navbar() {
  const history = useHistory();
  const handlenav = (url) => history.push(url);

  return (
    <div>
      <button onClick={() => handlenav("/")}>Home</button>
      <button onClick={() => handlenav("/login")}>Login</button>
      <button onClick={() => handlenav("/addfood")}>Add Food</button>
      <br />
      <br />
    </div>
  );
}

export default Navbar;
