/** @format */

import React, { useCallback } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAddToCartItems } from '../../../state/selectors/features/addtocart';
import { Images } from '../../../utils/theme';
import { getSliptedValue } from '../../../utils/splitted-value';
import { Header } from '../../../components';
import styles from './styled';
import ButtonStyles from '../productdescription/styled';
import { removeCartAction } from '../../../state/actions/addtocart';
import { getTotalCartAmount } from '../../../utils/total-cart-amount';

// Making here to avoid redering
const UIComponent = ({ addToCartItems, deliveryFee }: ICheckoutProps) => {
	return (
		<>
			<View style={styles.deliveryContainer}>
				<View style={styles.deliveryTextContainer}>
					<Text style={styles.deliveryText}>{'DELIVERY:'}</Text>
				</View>
				<View style={styles.deliveryValueContainer}>
					<Text style={styles.deliveryValue}>UPSTELL </Text>
				</View>
				<View style={styles.deliveryPriceContainer}>
					<Text style={styles.deliveryPrice}> ${deliveryFee}</Text>
				</View>
			</View>
			<View style={styles.totalContainer}>
				<View style={styles.totalTextContainer}>
					<Text style={styles.totalText}>{'TOTAL:'}</Text>
				</View>

				<View style={styles.totalValueContainer}>
					<Text style={styles.totalValue}>
						${getTotalCartAmount(addToCartItems, deliveryFee)}
					</Text>
				</View>
			</View>
		</>
	);
};
const CheckOut = ({ navigation }: INavigationProps) => {
	const dispatch: allAnyTypes = useDispatch();

	const addToCartItems = useSelector(getAddToCartItems);
	const deliveryFee = 18;

	const handleAddToCart = () => {
		dispatch(removeCartAction());
	};
	const renderItem = () => {
		return addToCartItems?.map(
			(
				{
					title,
					quantity,
					price,
				}: { title: string; quantity: number; price: number },
				index: number
			) => {
				return (
					<React.Fragment key={index}>
						<View style={styles.itemContainer}>
							<View style={styles.itemTitleContainer}>
								<Text style={styles.itemTitle}>
									{getSliptedValue(title)[0]?.toUpperCase()}
								</Text>
							</View>
							<View style={styles.itemQuantityContainer}>
								<Text style={styles.itemQuantity}>X {quantity} </Text>
							</View>
							<View style={styles.itemPriceContainer}>
								<Text style={styles.itemPrice}> ${price}</Text>
							</View>
						</View>
					</React.Fragment>
				);
			}
		);
	};
	const renderComponent = useCallback(() => {
		if (addToCartItems?.length > 0)
			return (
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.contentContainer}>
						<View style={styles.circleContainer}>
							<Image
								source={Images.images.downLongArrow}
								style={styles.circleImage}
							/>
						</View>
						{renderItem()}
						<UIComponent
							addToCartItems={addToCartItems}
							deliveryFee={deliveryFee}
						/>
						<TouchableOpacity
							style={ButtonStyles.addToCartButton}
							activeOpacity={0.8}
							onPress={handleAddToCart}>
							<Text style={ButtonStyles.addToCartButtonText}>Remove Cart</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			);

		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Image source={Images.images.emptyCart} />
			</View>
		);
	}, [addToCartItems]);

	return (
		<View style={styles.container}>
			<Header
				testID='CheckoutHeader'
				navigation={navigation}
				headerText='CHECK OUT'
			/>
			{renderComponent()}
		</View>
	);
};

export default CheckOut;
