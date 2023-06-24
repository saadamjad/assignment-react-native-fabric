import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/theme";

const styles: IPropsStyleSheet = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	contentContainer: {
		flex: 1,
		backgroundColor: Colors.lighGrayColor,
		marginTop: 50,
		height: '80%',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	circleContainer: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		borderRadius: 100,
		paddingRight: 25,
		top: -40,
		alignSelf: 'center',
		shadowColor: Colors.secondary,
		shadowOffset: {
			width: 0,
			height: 20,
		},
		shadowOpacity: 0.53,
		shadowRadius: 13.97,
		elevation: 22,
		backgroundColor: Colors.secondary,
	},
	circleImage: {
		height: 180,
		width: '100%',
	},
	itemContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		width: '85%',
		marginBottom: 25,
	},
	itemTitleContainer: {
		width: '40%',
		justifyContent: 'center',
	},
	itemTitle: {
		color: Colors.textColorPrimary,
		fontWeight: 'bold',
	},
	itemQuantityContainer: {
		width: '30%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemQuantity: {
		color: Colors.textColorPrimary,
		fontWeight: 'bold',
		fontSize: 15,
	},
	itemPriceContainer: {
		width: '30%',
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	itemPrice: {
		color: Colors.textColorPrimary,
		fontWeight: 'bold',
	},
	deliveryContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		width: '85%',
		paddingVertical: 20,
		borderTopWidth: 1,
		borderColor: Colors.lighGrayColor_1,
		marginTop: 30,
	},
	deliveryTextContainer: {
		width: '40%',
		justifyContent: 'center',
	},
	deliveryText: {
		color: Colors.textColorPrimary,
		fontWeight: 'bold',
	},
	deliveryValueContainer: {
		width: '30%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	deliveryValue: {
		color: Colors.textColorPrimary,
		fontWeight: 'bold',
		fontSize: 15,
	},
	deliveryPriceContainer: {
		width: '30%',
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	deliveryPrice: {
		color: Colors.textColorPrimary,
		fontWeight: 'bold',
	},
	totalContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'flex-end',
		paddingBottom: 30,
		width: '85%',
		flex: 1,
		paddingVertical: 20,
	},
	totalTextContainer: {
		width: '40%',
		justifyContent: 'center',
	},
	totalText: {
		color: Colors.textColorPrimary,
		fontSize: 30,
		fontWeight: 'bold',
	},
	totalValueContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	totalValue: {
		color: Colors.secondary,
		fontSize: 30,
		fontWeight: 'bold',
	},
});



export default styles;