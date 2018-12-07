import {combineReducers} from "redux";
import {chat} from "./chatReducers";

export const reducer = combineReducers({
  chat,
})