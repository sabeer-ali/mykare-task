import { LOGIN_DETAILS } from "./types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_DETAILS:
      return {
        loginDetails: action.payload,
      };
    default:
      return state;
  }
};
