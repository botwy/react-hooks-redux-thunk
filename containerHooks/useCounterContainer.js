import {useContext, useMemo, useCallback} from "react";
import {storeContext} from "../main";
import get from "lodash/get";

export const useCounterContainer =  () => {
  const {state, dispatch} = useContext(storeContext);

  const count = useMemo(() => get(state, "chat.count"), [state.chat]);

  const getCounterNextNumber = () => dispatch({type: "NEW_COUNT", newCount: count + 1});

  return { count, getCounterNextNumber };
}