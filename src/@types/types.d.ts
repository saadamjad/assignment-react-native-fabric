/** @format */

type StackNavigationProp =
	import('@react-navigation/stack').StackNavigationProp<
		allAnyTypes,
		allAnyTypes
	>;

type IPropsStyleSheet = import('react-native').StyleSheet;
type Component = import('react').Component;
type isTypeNumber = number;
type isTypeString = string;
type isTypeNull = null;
type isTypeBoolen = boolean;
type isTypeFunction = (value: isTypeNumber) => void;
type isTypeArray = Array<string>;
type isTypeArrayOfObjects = Array<string, isTypeObject>;
type isTypeUndefined = undefined;
type isTypeObject = Record<
	string,
	isTypeNumber,
	isTypeString,
	isTypeFunction,
	isTypeUndefined,
	isTypeBoolen
>;
type functionAndObjects = isTypeFunction | isTypeObject;
type isTypeNumberAndString = isTypeNumber | isTypeString;
type allAnyTypes =
	| isTypeObject
	| isTypeFunction
	| isTypeUndefined
	| isTypeString
	| isTypeNumber
	| isTypeArray
	| isTypeNull;


 interface ImageSourcePropType {
		height?: number;
		width?: number;
		scale?: number;
		uri?: string;
 }

 interface IHeaderProps {
		headerText?: isTypeString;
		rightIcon?: boolean;
		leftIcon?: boolean;
		backgroundColor?: isTypeString;
		onPress?: any;
		rightImage?: ImageSourcePropType;
		navigation: StackNavigationProp;
		testID?: isTypeString;
		isCrossIcon?: boolean;
		goBackDisabled?: boolean;
 }
 interface IProductDescriptionProps {
		getQauntity: isTypeNumberAndString;
 }

 interface IPropsAddToCartButton {
		getQauntity?: isTypeObject;
		quantity?: isTypeNumberAndString;
 }
 interface ICheckoutProps {
		addToCartItems: isTypeArray;
		deliveryFee: isTypeNumber;
 }

 interface Product {
		id: isTypeString;
		title: isTypeString;
		price: isTypeString;
		description: isTypeString;
		image: ImageSourcePropType;
		navigation: StackNavigationProp;
		wishList: boolean;
		index?: number;
 }

interface ProductCardProps {
	item: Product;
	navigation: StackNavigationProp;
}
interface ProductListProps {
	navigation: StackNavigationProp;
}

interface Product {
	id?: isTypeNumber;
	title: isTypeString;
	price: isTypeString;
	description: isTypeString;
	image: any;
	navigation: StackNavigationProp;
}

interface INavigationProps {
	navigation: StackNavigationProp;
}

interface OptionBarData {
	value: isTypeString;
	image: any;
	selected: boolean;
}

interface ImageViewProps {
	isShowActivity?: boolean;
	source: any;
	placeholderStyle?: isTypeObject;
	placeholderSource?: isTypeObject;
	[key: isTypeString]: any;
}

interface IResponseData<T> {
	data?: T;
	statusMessage?: isTypeString;
	statusCode?: isTypeNumber;
	error?: boolean;
	statusText?: isTypeString;
}

interface IAction {
	type: isTypeString;
	payload?: allAnyTypes;
}
