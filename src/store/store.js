import { legacy_createStore, combineReducers } from 'redux'
import ProductsReducer from './Procuts/Products.reducer'

const rootReducer = combineReducers({
    products: ProductsReducer
})
 
const store = legacy_createStore(rootReducer)

export default store
