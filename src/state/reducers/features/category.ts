import {
	GET_CATEGORIES_ATTEMP,
	GET_CATEGORIES_FAILURE,
	GET_CATEGORIES_SUCCESS,
	UPDATE_CATEGORIES_SUCCESS,
} from '../../action-types/category';

const INITIAL_STATE = {
	categories: {},
	loader: false,
};

const categoryEntityReducer = (
	state = INITIAL_STATE,
	action: IAction
): allAnyTypes => {
	switch (action.type) {
		case GET_CATEGORIES_ATTEMP: {
			return { ...INITIAL_STATE, loader: true };
		}
		case GET_CATEGORIES_SUCCESS: {
			const data = action.payload?.map((item: isTypeObject) => {
				return { ...item, wishList: false };
			});

			return { ...INITIAL_STATE, categories: data, loader: false };
		}

		case GET_CATEGORIES_FAILURE: {
			return { ...INITIAL_STATE, loader: false };
		}
		case UPDATE_CATEGORIES_SUCCESS: {
			return { ...INITIAL_STATE, categories: action.payload, loader: false };
		}

		default:
			return state;
	}
};

export {categoryEntityReducer};
