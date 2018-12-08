import React, {createContext, useState, useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {App} from "./app/App";
import {reducer, defaultState} from "./reducers"

export const storeContext = createContext();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const StoreContextProvider = ({children}) => {
  const [connectState, setConnectState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => { setConnectState(store.getState()) });

    return unsubscribe;
  }, [])


  const {Provider: ContextProvider} = storeContext;

  return (
    <ContextProvider value={{state: connectState, dispatch: store.dispatch}}>
      {children}
    </ContextProvider>
  );
}

ReactDOM.render(
<StoreContextProvider>
  <App/>
</StoreContextProvider>,
document.getElementById('app')
);