/**
 * Refer: https://ricostacruz.com/til/state-management-with-react-hooks
 */
import React from "react";
import { useState, useMemo, useContext } from "react";

const AppContext = React.createContext({});

/**
 * Actions as functions - similar with redux's dispatch()
 * @param {function} setState - react.setState
 * @param {Object} state - previous state
 */
const getActions = setState => ({
  increment: () => {
    setState(state => ({ ...state, count: state.count + 1 }));
  },
  decrement: () => {
    setState(state => ({ ...state, count: state.count - 1 }));
  },
});

/**
 * Custom React hook to manage state
 */
const useAppState = () => {
  const initialState = { count: 0 };
  const [state, setState] = useState(initialState);
  const actions = useMemo(() => getActions(setState), [setState]);

  return { state, actions };
};

/**
 * Custom React hook to manage global context
 */
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, useAppState, useAppContext };
