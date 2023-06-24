import {createSelector} from 'reselect';
import get from 'lodash.get';

const baseSelector = (state: allAnyTypes) => state.features.cartItems;

export const data = createSelector(baseSelector, state => state);

export const getAddToCartItems = createSelector(data, data =>
  get(data, 'addtoCartItems', []),
);

export const getCartCount = createSelector(
  getAddToCartItems,
  data => data?.length,
);

export const isLoading = createSelector(data, data =>
  get(data, 'loader', false),
);
