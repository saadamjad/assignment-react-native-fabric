/** @format */

import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styled';
import { Images } from '../../utils/theme';
import { ImageView } from '../../components';
import { getSliptedValue } from '../../utils/splitted-value';
import { ROUTES } from '../../constants/navigation-routes';
import colors from '../../utils/theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesData } from '../../state/selectors/features/category';
import { UpdateCategoriesAction } from '../../state/actions';

const ProductCard: React.FC<ProductCardProps> = ({ item, navigation }) => {
	const dispatch: allAnyTypes = useDispatch();
	const allProducts = useSelector(getCategoriesData);

	const { id, title, price, description, image, wishList } = item;

	const handleWishlistSelection = () => {
		const isSelectedData = allProducts?.map((item: Product) => {
			if (item?.id == id) {
				return { ...item, wishList: !item.wishList };
			}

			return { ...item };
		});

		dispatch(UpdateCategoriesAction(isSelectedData));
	};
	const navigationHanlder = () => {
		navigation.navigate(ROUTES.PRODUCT_DESCRIPTION, {
			productId: id,
		});
	};
	const navigateToCheckOut = () => {
		navigation.navigate(ROUTES.CHECK_OUT);
	};

	const productDescription = (value: string) => {
		let modifiedValue = '';
		getSliptedValue(value)
			?.slice(0, 4)
			?.map((item) => {
				modifiedValue = modifiedValue + ' ' + ' ' + item;
			});
		return modifiedValue;
	};

	return (
		<View
			testID='productCardRendered'
			key={id}
			style={styles.container}>
			<TouchableOpacity
				testID='productCard'
				onPress={navigationHanlder}
				activeOpacity={0.9}
				style={styles.parent}>
				<ImageView
					source={{ uri: image }}
					style={styles.backgroundImage}
					placeholderStyle={styles.backgroundImage}
					resizeMode='cover'>
					<View style={styles.productImage}>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={navigateToCheckOut}
							style={styles.cartButtonContainer}>
							<Image
								testID='CartImage'
								source={Images.images.cart}
								style={styles.image}
								resizeMode='cover'
							/>
						</TouchableOpacity>

						<TouchableOpacity
							activeOpacity={0.8}
							testID='wishlistButton'
							style={styles.wishlistContainer}
							onPress={handleWishlistSelection}>
							<Image
								testID='wishlistImage'
								source={Images.images.wishlist}
								style={[
									styles.image,
									{ tintColor: wishList ? colors.secondary : colors.primary },
								]}
								resizeMode='cover'
							/>
						</TouchableOpacity>
					</View>

					<View style={styles.productTitle}>
						<View style={styles.nameContainer}>
							<Text
								testID='productTitle'
								style={styles.name}>
								{getSliptedValue(title)[0]}
							</Text>
						</View>
					</View>
				</ImageView>

				<View style={styles.priceContainer}>
					<Text
						testID='productprice'
						style={styles.price}>
						{price}
					</Text>
					<Text
						testID='productDescription'
						numberOfLines={2}
						style={styles.description}>
						{productDescription(description)}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default ProductCard;
