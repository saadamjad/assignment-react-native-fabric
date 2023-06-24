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
import { useNavigateRoute } from '../../utils/hooks';

const Header: React.FC<IHeaderProps> = ({
	headerText,
	leftIcon = true,
	backgroundColor = 'transparent',
	onPress,
	rightImage = Images.images.cart,
	navigation,
	testID = 'headerComponent',
	isCrossIcon = false,
	goBackDisabled = false,
}) => {
	const cartItemsCount = useSelector(getCartCount);
	const isCartCountShown = cartItemsCount > 0;
	const { navigateToBack } = useNavigateRoute({ navigation });

	const renderRight = () => {
		if (isCrossIcon)
			return (
				<TouchableOpacity
					onPress={navigateToBack}
					style={styles.crossIconContainer}>
					<Image
						source={Images.images.cross}
						style={styles.crossImage}
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
			disabled={goBackDisabled}
			style={styles.leftContainer}
			onPress={navigateToBack}>
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

export default React.memo(Header);
