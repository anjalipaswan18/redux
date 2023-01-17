import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "./state/index";
import { useSelector } from "react-redux";

function Shop() {
  const dispatch = useDispatch();

  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreator,
    dispatch
  );
  const amount = useSelector((state) => state.amount);

  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
      {amount}
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Shop;
