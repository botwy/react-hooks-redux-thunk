import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {App} from "./app/App";
import {reducer} from "./reducers"

export const reducerContext = createContext();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
const storeConnect = {
  dispatch: store.dispatch,
  getState: store.getState,
}

const {Provider: ContextProvider} = reducerContext;

ReactDOM.render(
<ContextProvider value={storeConnect}>
  <App/>
</ContextProvider>,
document.getElementById('app')
);