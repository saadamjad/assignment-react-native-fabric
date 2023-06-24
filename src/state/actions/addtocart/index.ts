/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {ADD_TO_CART_SUCCESS, REMOVE_TO_CART_SUCCESS} from '../../action-types/category';

export const addToCartAction =
  (data: isTypeObject) =>
  async (dispatch: allAnyTypes): Promise<allAnyTypes> => {
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: data,
    });
    };
  
export const removeCartAction =
	() =>
	async (dispatch: allAnyTypes): Promise<allAnyTypes> => {
		dispatch({
			type: REMOVE_TO_CART_SUCCESS,
			payload: [],
		});
	};
