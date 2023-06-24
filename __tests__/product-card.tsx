/** @format */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductCard from '../src/components/product-card';
import { Provider } from 'react-redux';
import { ImageView } from '../src/components';
import { mockProductCardData, initialState } from '../__mocks__/mockdata';
import { store, navigationMock } from '../__mocks__/configs';

const renderComponent = () => (
	<Provider store={store(initialState)}>
		<ProductCard
			item={mockProductCardData}
			navigation={navigationMock}
		/>
	</Provider>
);

describe('ProductCard', () => {
	const { description } = mockProductCardData;
	it('Render Product Card Component', () => {
		const { getByTestId } = render(renderComponent());

		const productCardRendered = getByTestId('productCardRendered');

		expect(productCardRendered).toBeTruthy();
	});

	test('Render Product Price, Description and title ', () => {
		const { getByTestId } = render(renderComponent());

		const productPrice = getByTestId('productprice');
		const productDescription = getByTestId('productDescription');
		const productTitle = getByTestId('productTitle');

		expect(productPrice.props.children).toBe(mockProductCardData.price);
		expect(productTitle.props.children).toBe(mockProductCardData.title);
		expect(productDescription.props.children).toBe(description);
	});

	test('Render all images and icons ', () => {
		const { getByTestId } = render(renderComponent());

		const CartImage = getByTestId('CartImage');
		const wishListImage = getByTestId('wishlistImage');
		const Card = getByTestId('productCard');
		const imageElement = Card.findByType(ImageView);

		expect(mockProductCardData.cartImage).toBe(CartImage.props.source);
		expect(mockProductCardData.wishListImage).toBe(wishListImage.props.source);

		expect(imageElement).toBeTruthy();
	});

	test('Initial State of Wishlist ', () => {
		expect(mockProductCardData.wishList).toBe(false);
	});

	test('check navigation and passing params ', () => {
		const { getByTestId } = render(renderComponent());

		const productCard = getByTestId('productCard');
		fireEvent.press(productCard);

		expect(navigationMock.navigate).toHaveBeenCalledWith(
			'PRODUCT_DESCRIPTION',
			{
				productId: mockProductCardData.id,
			}
		);
	});
});
