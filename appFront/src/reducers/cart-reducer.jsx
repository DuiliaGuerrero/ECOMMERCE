export const cartListInitialState = {
    count: 0,
    productList: []
}

export const INCREMENT_ACTION = "INCREMENT"
export const DECREMENT_ACTION = "DECREMENT"

export const ADD_PRODUCT_ACTION = "ADD_PRODUCT"
export const DELETE_PRODUCT_ACTION = "DELETE_PRODUCT"

export const cartListReducer = (lastState, action) => {
    if(action.type == INCREMENT_ACTION){
        return {...lastState, count: lastState.count + 1}
    } else if (action.type == DECREMENT_ACTION) {
        return {...lastState, count: lastState.count - 1}
    } else if(action.type == ADD_PRODUCT_ACTION){
        const newProductList = [...lastState.productList, action.payload]

        return {
            ...lastState, 
            productList: newProductList,
            count: lastState.count + 1
        }
    } else if (action.type == DELETE_PRODUCT_ACTION) {
        return {...lastState, count: lastState.count - 1}
    }


    return state; 
};