import productsMock from '../../mocks/products.json'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = productsMock.products, action) {
    switch (action.type) {
        case 'TOGGLE_PRODUCT':
            return state.map(product =>
                product.id === action.payload
                    ? { ...product, checked: !product.checked }
                    : product
            )


        default:
            return state
    }
}