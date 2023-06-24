/** @format */

import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/theme';
import colors from '../../utils/theme/colors';

const styles: IPropsStyleSheet = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingHorizontal: 10,
	},
	productImage: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		flex: 0.5,
		paddingHorizontal: 10,
		paddingVertical: 15,
	},
	image: {
		height: 70,
		width: 40,
		marginTop: 10,
		tintColor: Colors.background,
	},
	productTitle: {
		flex: 0.5,
		justifyContent: 'flex-end',
		paddingBottom: 10,
		width: '100%',
	},
	parent: {
		width: '100%',
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.27,
		shadowRadius: 1.65,
		elevation: 1,
		backgroundColor: 'white',
		marginBottom: 20,
	},

	backgroundImage: {
		width: '100%',
		height: 250,
		borderRadius: 25,
		overflow: 'hidden',
		borderWidth: 0.5,
		borderColor: colors.lighGrayColor,
		backgroundColor: colors.background,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: 'red',
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.44,
		shadowRadius: 10.32,

		elevation: 30,
	},

	nameContainer: {
		backgroundColor: Colors.primary,
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
		paddingVertical: 8,
		width: '60%',
	},
	cartButtonContainer: {
		height: 30,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		width: 30,
		backgroundColor: Colors.secondary,
	},
	wishlistContainer: {
		height: 20,
		justifyContent: 'center',
		alignItems: 'center',
		width: 20,
	},
	name: {
		color: '#FFFFFF',
		fontSize: 17,
		marginLeft: 10,
	},
	priceContainer: {
		color: '#FFFFFF',
		marginLeft: 10,
		marginTop: 15,
	},
	price: {
		color: Colors.secondary,
	},
	description: {
		marginTop: 2,

		color: Colors.primary,
	},
});
export default styles;
