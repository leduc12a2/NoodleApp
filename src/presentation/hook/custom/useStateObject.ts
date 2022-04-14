import React from 'react';

export const useStateObject = <T>(initState: T) => {
  const [state, _setState] = React.useState<T>(initState);
  const setState = React.useCallback(
    (_state: T) => {
      _setState((preState) => ({...preState, ..._state}));
    },
    [state],
  );
  return {state, setState};
};
