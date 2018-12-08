import {useContext, useMemo, useCallback} from "react";
import {storeContext} from "../main";
import get from "lodash/get";

export const useChatListContainer =  () => {
  const {state} = useContext(storeContext);

  const chatList = useMemo(() => get(state.chat, "list"), [state.chat]);

  return { chatList };
}