/** @format */
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchTextInput from '../src/components/search-input';
import { allProducts } from '../__mocks__/mockdata';

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
}));

describe('SearchTextInput', () => {
	it('should call getSearchData with filtered data when text is entered', async () => {
		const getCategoriesData = jest.fn(() => allProducts);
		const getSearchData = jest.fn();

		jest
			.spyOn(require('react-redux'), 'useSelector')
			.mockImplementation(getCategoriesData);

		const { getByTestId } = render(
			<SearchTextInput
				getSearchData={getSearchData}
				textInput='searchInput'
			/>
		);

		const searchInput = getByTestId('searchInput');

		fireEvent.changeText(searchInput, 'Product');

		// Wait for debounce timeout
		await new Promise((resolve: any) => setTimeout(resolve, 500));

		expect(getSearchData).toHaveBeenCalledWith([
			{ title: 'Product 1' },
			{ title: 'Product 2' },
			{ title: 'Product 3' },
		]);
	});
});
