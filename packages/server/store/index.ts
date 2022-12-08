import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

enum ListActions {
  LOADING = 'LOADING',
  NAME = 'NAME',
}

const initialState: any = {
  loading: false,
  name: 'initialState-name',
};

export const getInitialState = (pathname = '/'): any => {
  return {
    data: initialState,
    router: {
      location: { pathname, search: '', hash: '', key: '' },
      action: 'POP',
    } as any,
  };
};

export const setName = (name: any) => ({
  type: ListActions.NAME,
  payload: name,
});

export const setLoading = (isLoading: any) => ({
  type: ListActions.LOADING,
  payload: isLoading,
});

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ListActions.LOADING:
      return { ...state, loading: action.payload };
    case ListActions.NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export const createRootReducer = (history: any) =>
  combineReducers<any>({
    data: dataReducer,
    router: connectRouter(history),
  });
