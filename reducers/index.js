import {combineReducers} from "redux";
import {chat, defaultChatState} from "./chatReducers";

export const defaultState = {
  chat: defaultChatState,
}

export const reducer = combineReducers({
  chat,
}, defaultState)