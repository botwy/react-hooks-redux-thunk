import React from 'react';
import {ChatListContainer} from "../container/ChatListContainer";
import {CounterContainer} from "../container/CounterContainer";

export const App = () => {

  console.log("App render")

  return (
    <div>
     <ChatListContainer/>
     <CounterContainer/>
    </div>
  );
}