const {createStore} =require("redux");

// Action Variable declear

const INCREMENT ="incerment"
const DECREMENT ="decerment"
const RESET ="reset"

// Initial State Declear

const initialCountState ={
    count: 0
}

// dispatch action delcear here

const incrementCount =()=>{
    return {
        type: INCREMENT
    }
}
const decrementCount =()=>{
    return {
        type: DECREMENT
    }
}
const resetCount =()=>{
    return {
        type: RESET
    }
}


const counterReducer =(state=initialCountState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count +1
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count -1
            }
        case RESET:
            return{
               
                count:0
            }
            
    
        default:
           state;
    }
}


// Create Store For State, action and Reducer

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount())
store.dispatch(resetCount())