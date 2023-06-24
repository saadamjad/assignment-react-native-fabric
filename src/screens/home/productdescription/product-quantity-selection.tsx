import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styled';
import { Images } from '../../../utils/theme';

const AddToCartButton = ({ getQauntity }: IPropsAddToCartButton) => {
	const [quantity, setQuantity] = useState<number>(1);

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	useEffect(() => {
		quantity && getQauntity(quantity);
	}, [quantity]);

	return (
		<View style={styles.quantityContainer}>
			<View style={styles.parentQuantityContainer}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={decreaseQuantity}>
					<Image
						source={Images.images.left}
						style={styles.imageContainer}
					/>
				</TouchableOpacity>

				<Text style={styles.quantity}>{quantity}</Text>

				<TouchableOpacity
					activeOpacity={0.8}
					onPress={increaseQuantity}>
					<Image
						source={Images.images.right}
						style={styles.imageContainer}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AddToCartButton;
