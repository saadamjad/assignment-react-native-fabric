import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styled';
import {Colors, Images} from '../../utils/theme';

const ProductFilterBar = ({ testID = 'parentContainerFilter' }) => {
	const [data, setData] = useState<OptionBarData[]>([
		{
			value: 'Bedroom',
			image: Images.images.downArrow,
			selected: false,
		},
		{
			value: '$0.203',
			image: Images.images.downArrow,
			selected: false,
		},
		{
			value: 'Sort',
			image: Images.images.downArrow,
			selected: true,
		},
	]);

	const handlerFilter = (index: number) => {
		const filterData = data?.map((item, i) => {
			if (index === i) {
				return { ...item, selected: !item.selected };
			}
			return { ...item, selected: false };
		});
		setData(filterData);
	};

	return (
		<View
			testID={testID}
			style={styles.container}>
			{data?.map(({ value, image, selected }, index) => {
				const isSortedSectionText = index === 2;
				const itemContainerStyle = [
					styles.itemContainer,
					selected
						? { backgroundColor: Colors.primary }
						: { backgroundColor: Colors.secondary },
					isSortedSectionText ? styles.sortedItemContainer : null,
				];
				return (
					<TouchableOpacity
						testID='child'
						activeOpacity={0.9}
						onPress={() => handlerFilter(index)}
						key={index}
						style={itemContainerStyle}>
						{value && <Text style={styles.itemText}>{value}</Text>}
						<Image
							testID='image1'
							source={image}
							style={styles.image}
						/>
					</TouchableOpacity>
				);
			})}
			<View
				testID='filterImages'
				style={styles.buttonContainer}>
				<Image
					testID='image2'
					source={Images.images.filter}
					style={styles.filterImage}
					resizeMode='cover'
				/>
				<Image
					testID='image3'
					source={Images.images.drawer}
					style={styles.drawerImage}
					resizeMode='cover'
				/>
			</View>
		</View>
	);
};

export default ProductFilterBar;
