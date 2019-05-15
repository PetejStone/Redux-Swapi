import {FETCH_START} from "../actions";
const initialState = {
  characters: [],
  isLoading: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    default:
      return state;
  }
};
