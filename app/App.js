import React from 'react';
import {ChatListContainer} from "../containerHooks/ChatListContainer";
import {Counter} from "../page/Counter";

export const App = () => {

  console.log("App render")

  return (
    <div>
     <ChatListContainer/>
     <Counter/>
    </div>
  );
}