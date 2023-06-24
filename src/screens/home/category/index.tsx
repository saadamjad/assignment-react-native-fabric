/** @format */

import React, { useEffect, useState } from 'react';
import { View, FlatList, BackHandler } from 'react-native';
import { Colors } from '../../../utils/theme';
import { staticText } from '../../../utils/staticTexts';
import {
	Header,
	AppLoader,
	ProductCard,
	SearchTextInput,
	ProductFilterBar,
} from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAction } from '../../../state/actions';
import {
	getCategoriesData,
	isLoading,
} from '../../../state/selectors/features/category';

const ProductList = ({ navigation }: ProductListProps) => {
	const [page, setPage] = useState<number>(10);
	const [searchData, setSearchData] = useState<allAnyTypes>();

	const dispatch: allAnyTypes = useDispatch();
	const allProducts = useSelector(getCategoriesData);
	const isLoader = useSelector(isLoading);

	useEffect(() => {
		dispatch(getCategoriesAction(page));
	}, [page]);

	const handleLoadMore = () => {
		allProducts?.length > 20 && setPage((prevPage) => prevPage + 6);
	};

	const renderItem = ({ item }: { item: Product }) => {
		return (
			<ProductCard
				item={item}
				navigation={navigation}
			/>
		);
	};
	const renderLoader = () => {
		return (
			<View testID='appLoaderComponent'>
				<AppLoader isActive={isLoader} />
			</View>
		);
	};

	const renderFilterBar = () => {
		return <ProductFilterBar testID='parentContainerFilter' />;
	};

	const renderSearchBar = () => {
		return (
			<SearchTextInput
				textInput='textInput'
				getSearchData={(data: isTypeArray) => setSearchData(data)}
			/>
		);
	};

	const navigationHandler = () => BackHandler.exitApp();

	const renderHeader = () => (
		<Header
			testID='headerComponent'
			onPress={navigationHandler}
			navigation={navigation}
			headerText={staticText.NAME}
		/>
	);
	return (
		<View
			testID='productParentComponent'
			style={{
				flex: 1,
				backgroundColor: Colors.background,
			}}>
			{renderHeader()}
			{renderLoader()}
			{renderSearchBar()}
			{renderFilterBar()}

			<FlatList
				testID='flatListComponent'
				showsVerticalScrollIndicator={false}
				data={searchData || allProducts}
				renderItem={renderItem}
				keyExtractor={(item) => item?.id}
				numColumns={2}
				onEndReached={handleLoadMore}
				onEndReachedThreshold={1}
			/>
		</View>
	);
};

export default ProductList;
