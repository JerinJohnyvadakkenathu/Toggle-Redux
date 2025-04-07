const initialState = { current: true }; // true = blue, false = red

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { current: !state.current };
    default:
      return state;
  }
};

export default Reducer;
