import React, { useState} from 'react';
import { Text, TouchableOpacity, Image} from 'react-native';
import styles from './styled';
import {Colors} from '../../../utils/theme';
import {useDispatch, useSelector} from 'react-redux';
import { getProductDetails } from '../../../state/selectors/features/productdescription';
import { AppLoader } from '../../../components';
import { addToCartAction } from '../../../state/actions/addtocart';
import { getAddToCartItems } from '../../../state/selectors/features/addtocart';
import { ROUTES } from '../../../constants/navigation-routes';
import { useNavigation } from '@react-navigation/native';
import { staticText } from '../../../utils/staticTexts';

const AddToCartButton = ({ quantity }: IPropsAddToCartButton) => {
	const navigation: StackNavigationProp = useNavigation();
	const dispatch: allAnyTypes = useDispatch();

	const [disabledButton, setDisabledButton] = useState<boolean>(false);
	const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);

	const productDetails = useSelector(getProductDetails);
	const { title, price }: Product = productDetails;
	const addToCartItems = useSelector(getAddToCartItems);

	const handleAddToCart = () => {
		setAddToCartLoader(true);
		setDisabledButton(true);

		const data = { title, price, quantity };
		const result = [...addToCartItems, data];
		dispatch(addToCartAction(result));
		setTimeout(() => {
			setAddToCartLoader(false);
			navigation.replace(ROUTES.CHECK_OUT);
		}, 1000);
	};

	const _renderAddToCartButtons = () => {
		return (
			<TouchableOpacity
				disabled={disabledButton}
				style={[
					styles.addToCartButton,
					disabledButton && { backgroundColor: Colors.lighGrayColor },
				]}
				activeOpacity={0.8}
				onPress={handleAddToCart}>
				{addToCartLoader ? (
					<AppLoader isActive={addToCartLoader} />
				) : (
					<Text style={styles.addToCartButtonText}>
						{' '}
						{staticText.ADD_TO_CART}{' '}
					</Text>
				)}
			</TouchableOpacity>
		);
	};

	return _renderAddToCartButtons();
};

export default AddToCartButton;
