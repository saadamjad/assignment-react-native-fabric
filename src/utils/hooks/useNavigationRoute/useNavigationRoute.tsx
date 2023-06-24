/** @format */

import { useCallback } from 'react';
import { ROUTES } from '../../../constants/navigation-routes';

export const useNavigateRoute = ({ navigation }: INavigationProps) => {
	const navigateToBack = useCallback(() => {
		navigation?.goBack();
	}, [navigation]);

	const navigateToCheckOut = useCallback(() => {
		navigation?.navigate(ROUTES.CHECK_OUT);
	}, [navigation]);

	const navigateToProductDescription = useCallback(
		(productId: string) => {
			navigation.navigate(ROUTES.PRODUCT_DESCRIPTION, {
				productId,
			});
		},
		[navigation]
	);

	return {
		navigateToBack,
		navigateToProductDescription,
		navigateToCheckOut,
	};
};
