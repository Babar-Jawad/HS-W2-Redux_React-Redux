import * as actions from "./actions-types";

export const depositMoney = (amount) => {
  return {
    type: actions.DEPOSIT_MONEY,
    payload: amount,
  };
};

export const withdrawMoney = (amount) => {
  return {
    type: actions.WITHDRAW_AMOUNT,
    payload: amount,
  };
};
