import {combineReducers} from 'redux';
import {categoryEntityReducer} from './category';
import {productDescriptionEntityReducer} from './productdescription';
import {addToCartReducer} from './addtocart';

const featuresReducer = combineReducers({
  category: categoryEntityReducer,
  productDescription: productDescriptionEntityReducer,
  cartItems: addToCartReducer,
});

export {featuresReducer};
