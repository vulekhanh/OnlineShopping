import { SEARCH_KEYS } from "../actions/keys";

const initialState = { keys: "" };

const keysReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_KEYS:
      return { keys: action.searchedKeys };
    default:
      return state;
  }
};

export default keysReducer;
