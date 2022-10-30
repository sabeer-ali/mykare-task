import { LOGIN_DETAILS } from "./types";

export const addLoginDetailsAction = (payload) => {
  return {
    type: LOGIN_DETAILS,
    payload,
  };
};
