/** @format */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants/navigation-routes';
import { Category, ProductDescription, CheckOut } from '../screens';
const { Screen, Navigator } = createStackNavigator();

export const RootNavigation = () => {
	return (
		<Navigator>
			<Screen
				name={ROUTES.HOME}
				component={Category}
				options={{
					headerShown: false,
				}}
			/>
			<Screen
				name={ROUTES.PRODUCT_DESCRIPTION}
				component={ProductDescription}
				options={{
					headerShown: false,
				}}
			/>
			<Screen
				name={ROUTES.CHECK_OUT}
				component={CheckOut}
				options={{
					headerShown: false,
				}}
			/>
		</Navigator>
	);
};
