import React from 'react';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import store from './reducers';

const root = ({ children, initialState = {} }) => {
  const rootStore = createStore(
    store,
    initialState,
    applyMiddleware(reduxPromise)
  );

  return <Provider store={rootStore}>{children}</Provider>;
};

export default root;
