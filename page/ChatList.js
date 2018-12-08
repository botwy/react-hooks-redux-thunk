import React from 'react';

export const ChatList = React.memo(({chatList}) => {

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
})