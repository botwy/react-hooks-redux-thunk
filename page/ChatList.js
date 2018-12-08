import React from 'react';
import {useChatListContainer} from "../containerHooks/useChatListContainer";

export const ChatList = () => {
  const { chatList } = useChatListContainer();

  console.log("ChatList render")

  if (!Array.isArray(chatList)) {
    return <div/>;
  }

  return (
    <div>
      {chatList.map((chat = {}) => (
        <div>
          <a>{chat.title}</a>
        </div>
      ))
      }
    </div>
  );
}