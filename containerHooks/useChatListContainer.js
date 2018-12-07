import {useContext, useMemo} from "react";
import {reducerContext} from "../main";
import get from "lodash/get";

export const useChatListContainer =  () => {
  const {getState} = useContext(reducerContext);

  const chatList = useMemo(() => get(getState().chat, "list"), [getState().chat]);

  return { chatList };
}