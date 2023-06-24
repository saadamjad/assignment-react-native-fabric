import {createSelector} from 'reselect';
import get from 'lodash.get';

const baseSelector = (state: allAnyTypes) => state.features.productDescription;

export const data = createSelector(baseSelector, state => state);

export const getProductDetails = createSelector(data, data =>
  get(data, 'productDetails', {}),
);

export const isLoading = createSelector(data, data =>
  get(data, 'loader', false),
);
