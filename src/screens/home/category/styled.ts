import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/theme';

const styles: IPropsStyleSheet = StyleSheet.create({
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

		backgroundColor: 'red',

		marginBottom: 20,
	},
	container: {
		borderRadius: 20,
		overflow: 'hidden',
		backgroundColor: Colors.background,
	},
	backgroundImage: {
		width: '100%',
		height: 250,
		borderRadius: 20,
		overflow: 'hidden',
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
	},

	wishlistButtonSelected: {
		backgroundColor: 'rgba(255, 0, 0, 0.8)',
		borderRadius: 12,
		padding: 5,
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
		height: 30,
		alignItems: 'flex-end',
		justifyContent: 'center',
		width: 30,
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
