import { useReducer, useEffect, useCallback } from "react";

// Reducer => Re(act State Pro)ducer
// 즉, 리액트 상태 생성이자
// 액션에 대한 선택지를 줄여 상태를 변화시키는 느낌

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// callback이 API로부터 데이터를 받아오는 함수
export function useAsync(callback, deps = [], skip = false) {
  // state의 초기값으로 객체를 넣어주고, reducer 함수도 넣어준다.
  const [state, dispatch] = useReducer(reducer, { 
    loading: false,
    data: null,
    error: null,
  });
  // async 함수에서는 await가 실행되면, 그것이 끝날 때까지 다른 것들 돌아가지 않음.
  const fetchData = useCallback(async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  }, [callback]);

  useEffect(() => {
    if (skip) return;
    fetchData();
    //eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}