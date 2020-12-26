import { combineReducers } from "redux";
import reducer from "./reducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  main: reducer,
  firestore: firestoreReducer,
});

export default rootReducer;
