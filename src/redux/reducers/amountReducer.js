let defaultState = 0;

const amountReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DEPOSIT_MONEY":
      return state + action.payload;

    case "WITHDRAW_MONEY":
      return state - action.payload;

    default:
      return state;
  }
};

export default amountReducer;
