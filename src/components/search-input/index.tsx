/** @format */

import React from 'react';
import { TextInput } from 'react-native';
import styles from './styled';

import { getCategoriesData } from '../../state/selectors/features/category';
import { useSelector } from 'react-redux';

const SearchTextInput = ({ getSearchData, textInput }: any) => {
	const allProducts = useSelector(getCategoriesData);

	const handleSearch = (query: string) => {
		setTimeout(() => {
			const filtered = allProducts?.filter((item: { title: string }) =>
				item?.title?.toLowerCase()?.includes(query?.toLowerCase())
			);

			getSearchData(filtered);
		}, 500);
	};

	return (
		<TextInput
			testID={textInput}
			placeholder='Search by title'
			style={styles.searchInput}
			onChangeText={handleSearch}
		/>
	);
};

export default SearchTextInput;
