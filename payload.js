const {createStore} =require("redux");

// Declear Initial state

const initialState ={
    users: [],
    count:0
}


const addUser =(val)=>{
    return(
        {
            type: "Add_User",
            payload:val
        }
    )
}

// create Reducer Function 
const usersReducer =(state=initialState,action)=>{
    switch (action.type) {
        case "Add_User":
           return{
            ...state,
            users: [...state.users,action.payload],
            count: state.count +1
           }
        default:
          return state;
    }
}

// Create Store for state, action and reducer
const store = createStore(usersReducer);


store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(addUser("Maksudur"))
store.dispatch(addUser("Rahman"))
store.dispatch(addUser("Rita"))
store.dispatch(addUser("Surma"))
store.dispatch(addUser("Akter"))
