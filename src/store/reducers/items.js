import { CLICK_ITEM } from "../actions/items";

const initialState = { selectedItem: {} };

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_ITEM:
      return { selectedItem: action.item };
    default:
      return state;
  }
};

export default itemReducer;
