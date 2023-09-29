// import redux modules

const {createStore, combineReducers,applyMiddleware} =require('redux');
const {default:logger} =require('redux-logger')

// initial State For Product

const productState ={
    products :['iphone','samsung'],
    count : 2
}

// cart State declear

const cartState ={
    carts: ['telephone','laptop'],
    count: 2
}


// add action callback function for product

const addProduct =(product)=>{
    return{
        type:'add_product',
        payload: product
    }
}
const addCart =(product)=>{
    return{
        type:'add_cart',
        payload: product
    }
}

// declear a reducer function 

const productReducer =(state=productState,action)=>{
    switch (action.type) {
        case 'add_product':
          return{
            ...state,
            products:[...state.products,action.payload],
            count: state.count + 1
          }
        default:
        return state;
    }
}
const cartReducer =(state=cartState,action)=>{
    switch (action.type) {
        case 'add_cart':
          return{
            ...state,
            carts:[...state.carts,action.payload],
            count: state.count + 1
          }
        default:
        return state;
    }
}


const rootReducer = combineReducers({
    productAdd: productReducer,
    cartAdd: cartReducer
})


const store = createStore(rootReducer,applyMiddleware(logger));

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addProduct('realme'))
store.dispatch(addCart('Radio'))