export const deposityMoney = (amount) => {
  return (dispatch) => ({
    type: "deposit",
    payload: "amount",
  });
};
export const withdrowMoney = (amount) => {
  return (dispatch) => ({
    type: "withdrow",
    payload: "amount",
  });
};
