import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import UserReducer from './user/user.reducer'
import CartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
const rootReducer =  combineReducers({
    user:UserReducer,
    cart:CartReducer,
    directory:directoryReducer,
    shop:shopReducer
})
const persistConfig = {
    'key':'root',
    storage,
    whitelist:['cart']
}
export default persistReducer(persistConfig,rootReducer)
