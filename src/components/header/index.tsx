/** @format */

import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ImageBackground,
} from 'react-native';
import { useSelector } from 'react-redux';
import { getCartCount } from '../../state/selectors/features/addtocart';
import { Colors, Images } from '../../utils/theme';
import styles from './styled';

const Header: React.FC<IHeaderProps> = ({
	headerText,
	leftIcon = true,
	rightComponent = () => console.log(),
	backgroundColor = 'transparent',
	onPress,
	rightImage = Images.images.cart,
	navigation,
	testID = 'headerComponent',
	isCrossIcon = false,
}) => {
	const cartItemsCount = useSelector(getCartCount);
	const isCartCountShown = cartItemsCount > 0;
	const navigationGoBack = () => navigation.goBack();

	const renderRight = () => {
		if (isCrossIcon)
			return (
				<TouchableOpacity
					onPress={navigationGoBack}
					style={{
						height: 40,
						borderRadius: 40,
						alignItems: 'center',
						justifyContent: 'center',
						width: 40,
						backgroundColor: Colors.lighGrayColor_1,
						paddingTop: 10,
					}}>
					<Image
						source={Images.images.cross}
						style={{ height: 90, width: 90 }}
					/>
				</TouchableOpacity>
			);

		return (
			<ImageBackground
				source={rightImage}
				style={styles.imageBackground}>
				{isCartCountShown && (
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={onPress}
						style={styles.rightImageContainer}>
						<Text style={styles.rightText}>{cartItemsCount}</Text>
					</TouchableOpacity>
				)}
			</ImageBackground>
		);
	};
	const renderLeft = () => (
		<TouchableOpacity
			activeOpacity={0.8}
			style={styles.leftContainer}
			onPress={navigationGoBack}>
			{leftIcon && (
				<Image
					source={Images.images.leftArrow}
					style={styles.leftImage}
				/>
			)}
		</TouchableOpacity>
	);
	return (
		<View
			testID={testID}
			style={[styles.header, { backgroundColor }]}>
			{renderLeft()}
			<View style={styles.titleContainer}>
				<Text style={{ color: Colors.primary }}>{headerText} </Text>
			</View>
			<View style={styles.rightContainer}>{renderRight()}</View>
		</View>
	);
};

export default Header;
