const reducer = (state = 0, action) => {
  if (action.type === "diposite") {
    return state + action.playload;
  } else if (action.type === "withdrow") {
    return state - action.playload;
  } else {
    return state;
  }
};
export default reducer;
