const { combineReducers } = require("redux");
const { default: amountReducer } = require("./amountReducer");

const rootReducer = combineReducers({
  amount: amountReducer,
});

export default rootReducer;
