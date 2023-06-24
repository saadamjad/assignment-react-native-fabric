/** @format */

import { Images } from '../src/utils/theme';

const mockProductCardData: any = {
	id: 1,
	title: 'Test',
	price: '$9.99',
	description: 'This is a test',
	productImage: { uri: 'https://example.com/image.png' },
	wishListImage: Images.images.wishlist,
	cartImage: Images.images.wishlist,
	wishList: false,
};

const initialState = {
	features: {
		category: {},
		allProducts: [],
	},
};

	const allProducts = [
		{ title: 'Product 1' },
		{ title: 'Product 2' },
		{ title: 'Product 3' },
	];
	export { mockProductCardData, initialState, allProducts };
