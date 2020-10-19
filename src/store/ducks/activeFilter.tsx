import { VIEW_FILTERS } from '../../constants';

// action types constants
export const SET_FILTER = 'SET_FILTER';

// initial state
const initialState =  JSON.parse(localStorage.getItem("todos") || "").activeFilter || VIEW_FILTERS.ACTIVE;

// actions
export const setFilter = (filter: string) => ({ type: SET_FILTER, payload: { filter } });

// reducer
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

// selectors