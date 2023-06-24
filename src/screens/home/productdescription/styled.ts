import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/theme';

const styles: IPropsStyleSheet = StyleSheet.create({
	container: {
		flex: 1,
	},
	discriptionContainer: {
		flex: 1,
		backgroundColor: 'transparent',
		justifyContent: 'flex-end',
	},
	backgroundImage: {
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	loaderContainer: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		backgroundColor: 'black',
		opacity: 0.8,
		justifyContent: 'center',
	},
	productDetails: {
		justifyContent: 'flex-end',
		backgroundColor: Colors.background,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
	},
	imageContainer: { height: 20, width: 20 },
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		color: Colors.textColorPrimary,
	},
	section: {
		marginBottom: 16,
	},
	priceSection: {
		marginBottom: 16,
		flexDirection: 'row',
	},
	priceContainer: {
		backgroundColor: Colors.primary,
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
		paddingVertical: 30,
		width: '45%',
	},
	price: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		fontSize: 30,
		marginLeft: 30,
	},
	quantityContainer: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingRight: 40,
	},
	parentQuantityContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		paddingVertical: 10,
		width: 90,
		backgroundColor: Colors.lighGrayColor_1,
	},

	quantity: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#FFFFFF',
		marginLeft: 8,
		marginRight: 8,
	},
	colorSelection: {
		flexDirection: 'row',
		marginLeft: 30,
		marginTop: 15,
		alignItems: 'center',
	},
	radioButton: {
		width: 20,
		height: 20,
		marginRight: 5,
		borderRadius: 20,
		borderWidth: 1.5,
		borderColor: Colors.lighGrayColor_1,
	},
	radioButtonSelected: {
		borderWidth: 3,
		borderColor: Colors.primary,
	},
	descriptionText: {
		fontWeight: 'bold',
		color: Colors.textColorPrimary,
	},
	descriptionTextParent: {
		width: '83%',
		alignSelf: 'center',
		marginBottom: 10,
	},
	addToCartButton: {
		backgroundColor: Colors.secondary,
		borderRadius: 10,
		paddingVertical: 14,
		alignSelf: 'center',
		marginVertical: 20,
		width: 160,
		alignItems: 'center',
		borderColor: Colors.secondary,
	},
	viewCartButton: {
		backgroundColor: Colors.secondary,
		borderRadius: 40,
		position: 'absolute',
		bottom: 30,
		right: 30,
		justifyContent: 'center',
		width: 40,
		height: 40,
		alignItems: 'center',
	},
	addToCartButtonText: {
		color: '#FFFFFF',
	},
});

export default styles;
