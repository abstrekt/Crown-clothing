import shopActionsType from "./shop.types";

const INITIAL_DATA = {
  collections: null
};

const shopReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case shopActionsType.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};
export default shopReducer;
