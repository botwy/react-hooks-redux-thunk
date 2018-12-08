import React, {useContext, useMemo} from "react";
import {storeContext} from "../main";
import {ChatList} from "../page/ChatList";
import get from "lodash/get";

export const ChatListContainer =  () => {
  const {state, dispatch} = useContext(storeContext);
  const chatList =  useMemo(() => get(state, "chat.list"),[state.chat]);
  const handler = () => dispatch({type:"ENTER_CHAT"});

  return (
    <ChatList chatList={chatList} handler={handler}/>
  );
}