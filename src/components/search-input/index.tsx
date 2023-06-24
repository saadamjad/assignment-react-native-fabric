/** @format */

import React, { useCallback } from 'react';
import { TextInput } from 'react-native';
import styles from './styled';
import { getCategoriesData } from '../../state/selectors/features/category';
import { useSelector } from 'react-redux';

const SearchTextInput = ({ getSearchData, textInput }: any) => {
	const allProducts = useSelector(getCategoriesData);

	const handleSearch = useCallback(
		(query: string) => {
			const filtered = allProducts?.filter((item: { title: string }) =>
				item?.title?.toLowerCase()?.includes(query?.toLowerCase())
			);

			getSearchData(filtered);
		},
		[getSearchData]
	);

	return (
		<TextInput
			testID={textInput}
			placeholder='Search by title'
			style={styles.searchInput}
			onChangeText={handleSearch}
		/>
	);
};

export default React.memo(SearchTextInput);
