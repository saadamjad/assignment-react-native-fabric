/** @format */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductFilterBar from '../src/components/product-filters';
import { Colors } from '../src/utils/theme';

describe('ProductFilterBar', () => {
	it('renders the component with initial data', () => {
		const { getAllByTestId, getByTestId } = render(<ProductFilterBar />);

		const parentContainer = getByTestId('parentContainerFilter');
		const childButtons = getAllByTestId('child');
		const filterImages = getByTestId('filterImages');

		expect(parentContainer).toBeTruthy();
		expect(childButtons.length).toBe(3);
		expect(filterImages).toBeTruthy();

		childButtons?.map((item, i) => {
			const lastIndex = childButtons?.length - 1 === i;
			if (!lastIndex) {
				expect(item.props.style.backgroundColor).toBe(Colors.secondary);
			} else {
				expect(item.props.style.backgroundColor).toBe(Colors.primary);
			}
		});
	});

	test('Check filter selection', () => {
		const { getAllByTestId } = render(<ProductFilterBar />);

		const childButtons = getAllByTestId('child');

		return childButtons.forEach((item, i) => {
			fireEvent.press(childButtons[i]);
			const expectedColor = i == i ? Colors.primary : Colors.secondary;
			const receivedColor = item.props.style.backgroundColor;
			expect(receivedColor).toBe(expectedColor);
		});
	});

	test('All Images  render or not ', () => {
		const { getAllByTestId } = render(<ProductFilterBar />);

		const image1 = getAllByTestId('image1');
		const image2 = getAllByTestId('image2');
		const image3 = getAllByTestId('image3');

		expect(image1).toBeTruthy();
		expect(image2).toBeTruthy();
		expect(image3).toBeTruthy();
	});
});
