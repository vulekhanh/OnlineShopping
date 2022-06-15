export const SEARCH_KEYS = "SEARCH_KEYS";

export const searchKeys = (items) => {
  return { type: SEARCH_KEYS, searchedKeys: items };
};
