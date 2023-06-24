import {ADD_TO_CART_SUCCESS, REMOVE_TO_CART_SUCCESS} from '../../action-types/category';

const INITIAL_STATE = {
  addtoCartItems: [],
};

const addToCartReducer = (
  state = INITIAL_STATE,
  action: IAction,
): allAnyTypes => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS: {
      return {
        ...state,
        addtoCartItems: action.payload,
        loader: false,
      };
    }
    case REMOVE_TO_CART_SUCCESS: {
      return {
        ...state,
        addtoCartItems: action.payload,
        loader: false,
      };
    }

    default:
      return state;
  }
};

export {addToCartReducer};
