import { CHANGE_USER } from "../actions/users";

const initialState = { username: "hieu", cart: {id:1, detail:[]} };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return { username: action.username, cart: action.cart };
    default:
      return state;
  }
};

export default usersReducer;
