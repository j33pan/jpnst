import React from "react";
import { useHistory } from "react-router";

function Navbar(props) {
  const history = useHistory();
  const { curruser } = props;

  const handlenav = (url) => history.push(url);

  return (
    <div>
      <button onClick={() => handlenav("/")}>Home</button>
      <button onClick={() => handlenav("/login")}>Login</button>
      <button onClick={() => handlenav("/addfood")}>Add Food</button>
      <button onClick={() => handlenav("/food")}>Food</button>
      <button onClick={() => handlenav("/order")}>Order</button>
      {curruser}
      <br />
      <br />
    </div>
  );
}

export default Navbar;
