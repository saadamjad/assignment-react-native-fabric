import {ProductDescriptionService} from '../../../services';
import {
	PRODUCT_DESCRIPTION,
	SERVER_BASE_URL,
} from '../../../constants/server';
import {
  GET_CATEGORIES_DESCRIPTION_ATTEMP,
  GET_CATEGORIES_DESCRIPTION_FAILURE,
  GET_CATEGORIES_DESCRIPTION_SUCCESS,
} from '../../action-types/category';

const productDescription = new ProductDescriptionService();

export const getCategoriesDescriptionAction =
	(productId: number) =>
	async (dispatch: allAnyTypes): Promise<allAnyTypes> => {
		dispatch({ type: GET_CATEGORIES_DESCRIPTION_ATTEMP });

		try {
			const response = await productDescription.getCategoriesDescriptionApiCall(
				SERVER_BASE_URL,
				`${PRODUCT_DESCRIPTION}${productId}`
			);
			dispatch({
				type: GET_CATEGORIES_DESCRIPTION_SUCCESS,
				payload: response?.data,
			});
		} catch (error: allAnyTypes) {
			dispatch({ type: GET_CATEGORIES_DESCRIPTION_FAILURE });

			console.log(error);
		}
	};
