/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {CategoryService} from '../../../services';
import { PRODUCT_END_POINT, SERVER_BASE_URL } from '../../../constants/server';

import {
	GET_CATEGORIES_ATTEMP,
	GET_CATEGORIES_FAILURE,
	GET_CATEGORIES_SUCCESS,
	UPDATE_CATEGORIES_SUCCESS,
} from '../../action-types/category';

const categoryService = new CategoryService();

export const getCategoriesAction =
	(paginatedValue: number) =>
	async (dispatch: allAnyTypes): Promise<allAnyTypes> => {
		dispatch({ type: GET_CATEGORIES_ATTEMP });

		try {
			const response = await categoryService.getCategoriesApiCall(
				SERVER_BASE_URL,
				`${PRODUCT_END_POINT}${paginatedValue}`
			);
			dispatch({ type: GET_CATEGORIES_SUCCESS, payload: response?.data });
		} catch (error: allAnyTypes) {
			dispatch({ type: GET_CATEGORIES_FAILURE });

			console.log(error);
		}
	};

export const UpdateCategoriesAction =
	(data: isTypeArray) =>
	async (dispatch: allAnyTypes): Promise<allAnyTypes> => {
		dispatch({ type: UPDATE_CATEGORIES_SUCCESS, payload: data });
	};
