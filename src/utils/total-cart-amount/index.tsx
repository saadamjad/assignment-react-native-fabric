/** @format */

const getTotalCartAmount = (addToCartItems: any, deliveryFee: number) => {
	const totalAmount = addToCartItems?.reduce(
		(accumulator: number, item: { price: number; quantity: number }) => {
			return accumulator + item.price * item.quantity + deliveryFee;
		},
		0
	);

	return totalAmount?.toFixed(1) || '0';
};

export { getTotalCartAmount };
