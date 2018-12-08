import React, {useContext, useMemo} from "react";
import {storeContext} from "../main";
import {ChatList} from "../page/ChatList";
import get from "lodash/get";

export const ChatListContainer =  () => {
  const {Consumer} = storeContext;

  return (
    <Consumer>
      {({state}) => {
        const chatList =  get(state, "chat.list");

        return <ChatList chatList={chatList}/>
      }}
    </Consumer>
  );
}