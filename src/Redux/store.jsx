import { createStore } from "redux";
import rotateReducer from "./reducer";

function configureStore(state = { loginDetails: null }) {
  return createStore(rotateReducer, state);
}

export default configureStore;
