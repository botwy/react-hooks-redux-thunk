import {handleActions} from "redux-actions";

export const defaultChatState = {
  count: 0,
  list: [
    {
      id: "A-00001-A",
      title: "Chat one",
      private: false,
      memberList: [
        {id: "AAA-001", name: "Dima"},
        {id: "AAA-002", name: "Dasha"},
        {id: "AAA-003", name: "Lena"},
      ],
      messageList: [
        {
          id: "0",
          text: "hello",
          memberId: "AAA-001",
          memberName: "Dima",
        },
      ]
    },
  ],
}

export const chat = handleActions({
  "NEW_COUNT": (state, action) => ({
    ...state,
    count: action.newCount,
  })
}, defaultChatState)