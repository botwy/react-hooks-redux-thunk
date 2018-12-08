import React, {useContext, useMemo, useCallback} from "react";
import {storeContext} from "../main";
import {Counter} from "../page/Counter";
import get from "lodash/get";

export const CounterContainer =  () => {
  const {state, dispatch} = useContext(storeContext);

  const count = useMemo(() => get(state, "chat.count"), [state.chat]);

  const getCounterNextNumber = useCallback(() => dispatch({type: "NEW_COUNT", newCount: count + 1}), [count]);

  return (
    <Counter
      count={count}
      getCounterNextNumber={getCounterNextNumber}
    />
  );
}