import { combineReducers } from "redux";
import questionReducer from "./qustion/questionsReducer";

export default combineReducers({ question: questionReducer });
