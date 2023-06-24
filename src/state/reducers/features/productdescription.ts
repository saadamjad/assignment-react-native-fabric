import {
  GET_CATEGORIES_DESCRIPTION_ATTEMP,
  GET_CATEGORIES_DESCRIPTION_FAILURE,
  GET_CATEGORIES_DESCRIPTION_SUCCESS,
} from '../../action-types/category';

const INITIAL_STATE = {
  productDetails: {},
  loader: false,
};

const productDescriptionEntityReducer = (
  state = INITIAL_STATE,
  action: IAction,
): allAnyTypes => {
  switch (action.type) {
    case GET_CATEGORIES_DESCRIPTION_ATTEMP: {
      return {...INITIAL_STATE, loader: true};
    }
    case GET_CATEGORIES_DESCRIPTION_SUCCESS: {
      return {...INITIAL_STATE, productDetails: action.payload, loader: false};
    }
    case GET_CATEGORIES_DESCRIPTION_FAILURE: {
      return {...INITIAL_STATE, loader: false};
    }

    default:
      return state;
  }
};

export {productDescriptionEntityReducer};
