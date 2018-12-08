import React from 'react';
import {ChatList} from "../page/ChatList";
import {Counter} from "../page/Counter";

export const App = () => {

  console.log("App render")

  return (
    <div>
     <ChatList/>
     <Counter/>
    </div>
  );
}