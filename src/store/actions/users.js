export const CHANGE_USER = "CHANGE_USER";

export const changeUser = (username, cart) => {

  return { type: CHANGE_USER, username: username, cart: cart };
};
