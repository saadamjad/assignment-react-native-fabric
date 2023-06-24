/** @format */

import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesDescriptionAction } from '../../../state/actions';
import {
	getProductDetails,
	isLoading,
} from '../../../state/selectors/features/productdescription';
import { AppLoader, Header, ImageView } from '../../../components';

import ColorSelection from './color-selection';
import AddToCartButton from './add-to-cart-button';
import { ProductQuantitySelection } from '.';

const ProductDescriptionCard: React.FC = ({
	route,
	navigation,
}: isTypeObject) => {
	const productId: number = route?.params?.productId;
	const [quantity, setQuantity] = useState<number>(1);
	const productDetails = useSelector(getProductDetails);
	const loader = useSelector(isLoading);
	const { title, price, description, image }: Product = productDetails;
	const dispatch: allAnyTypes = useDispatch();

	useEffect(() => {
		productId && dispatch(getCategoriesDescriptionAction(productId));
	}, []);

	const _renderAddToCartButtons = () => {
		return <AddToCartButton quantity={quantity} />;
	};

	const _renderLoader = () => {
		if (!description)
			return (
				<View
					style={styles.loaderContainer}
					testID='appLoaderComponent'>
					<AppLoader isActive={true} />
				</View>
			);
		return null;
	};

	const _renderHeader = () => {
		return (
			<Header
				testID='headerComponent'
				isCrossIcon
				navigation={navigation}
			/>
		);
	};
	const renderColorSelection = () => {
		return (
			<View testID='colorSelection'>
				<ColorSelection />
			</View>
		);
	};

	const renderProductQuantitySelection = () => {
		return (
			<View
				testID='priceQauntityContainer'
				style={styles.priceSection}>
				<View style={styles.priceContainer}>
					<Text style={styles.price}>${price}</Text>
				</View>

				<ProductQuantitySelection
					getQauntity={(value: number) => setQuantity(value)}
				/>
			</View>
		);
	};

	const _renderMainComponent = useCallback(() => {
		return (
			<View style={{ flex: 1 }}>
				<ImageView
					source={{ uri: image }}
					placeholderStyle={styles.backgroundImage}
					style={styles.backgroundImage}
					resizeMode='cover'
				/>
				{_renderHeader()}
				<View style={styles.discriptionContainer}>
					<View style={styles.productDetails}>
						<View style={{ paddingVertical: 30 }}>
							<Text style={styles.title}> {title}</Text>
						</View>

						{renderProductQuantitySelection()}

						{renderColorSelection()}

						<View style={styles.descriptionTextParent}>
							<Text style={styles.descriptionText}>{description}</Text>
						</View>

						{_renderAddToCartButtons()}
					</View>
					{_renderLoader()}
				</View>
			</View>
		);
	}, [quantity, title, price, description, image]);

	return (
		<View
			testID='productDescriptionParent'
			style={styles.container}>
			{_renderMainComponent()}
		</View>
	);
};

export default React.memo(ProductDescriptionCard);
