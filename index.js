
const {createStore} =require('redux')



// state defination 
const INCREMENT ="increment";
const DECREMENT ="decrement";
const ADD_USER ="add_user";

const initialCountState ={
    count: 0
}

// user state

const initialUserState ={
    user:[{name:"Maksudur Rahman"}]
}

// declear Action 
const incrementCounter =()=>{
    return {
        type: INCREMENT
    }
}

const decrementCounter =()=>{
    return {
        type: DECREMENT
    }
}
const addUser =(user)=>{
    return {
        type: ADD_USER,
        payload: user
    }
}


// Create A reducer Function

const counterReducer=(state=initialCountState,action)=>{
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
        default:
            state;
    }
}

// create store

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());



