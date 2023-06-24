/** @format */

import { StyleSheet } from 'react-native';
import colors from '../../utils/theme/colors';

const styles: IPropsStyleSheet = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 70,
		width: '90%',
		alignSelf: 'center',

		overflow: 'hidden',
	},

	headerText: {
		fontSize: 16,
	},
	rightText: { color: colors.background, fontSize: 10 },
	leftContainer: {
		width: '33.33%',
		height: '100%',
		alignItems: 'flex-start',
		paddingRight: 70,
	},
	leftImage: { height: '100%', width: '100%' },

	imageBackground: {
		height: 120,
		width: 120,
		justifyContent: 'center',
		alignItems: 'center',
	},
	rightImageContainer: {
		top: -14,
		right: -10,
		backgroundColor: colors.secondary,
		alignItems: 'center',
		justifyContent: 'center',
		width: 18,
		height: 18,
		borderRadius: 18,
	},

	titleContainer: {
		height: '100%',
		justifyContent: 'center',
		width: '33.33%',
		alignItems: 'center',
	},
	rightContainer: {
		height: '100%',
		justifyContent: 'center',
		paddingLeft: 30,
		width: '33.33%',
		alignItems: 'center',
	},
});
export default styles;
