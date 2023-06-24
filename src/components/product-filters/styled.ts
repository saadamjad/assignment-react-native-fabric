/** @format */

import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/theme';

const styles: IPropsStyleSheet = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 30,
		width: '90%',
		marginBottom: 20,
		alignSelf: 'center',
	},
	itemContainer: {
		flexDirection: 'row',
		borderRadius: 30,
		paddingVertical: 6,
		paddingHorizontal: 23,
		alignItems: 'center',
	},
	sortedItemContainer: {
		borderRadius: 8,
		paddingHorizontal: 5,
	},
	itemText: {
		color: Colors.background,
		fontSize: 10,
	},
	image: {
		height: 20,
		width: 20,
		tintColor: Colors.background,
	},
	buttonContainer: {
		borderRadius: 30,
		height: 30,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		flexDirection: 'row',
		paddingLeft: 10,
	},
	filterImage: {
		height: 120,
		width: 20,
		marginTop: 10,
	},
	drawerImage: {
		height: 70,
		width: 30,
	},
});

export default styles;
