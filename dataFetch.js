// create store modules import from redux
const {createStore,applyMiddleware}=require('redux')
const{default:thunk} = require('redux-thunk')
// initial state declear 
const initialState ={
    data :[],
    isLoading: false,
    error:null
}

const sendRequest =()=>{
    return{
        type:"SEND_REQ"
    }
}
const dataLoad =(todos)=>{
    return{
        type:"REQ_SUCCESS",
        paylod: todos
    }
}
const sendError =(error)=>{
    return{
        type:"FAILED",
        paylod: error
    }
}

const fetchDataReducer =(state=initialState,action)=>{
    switch (action.type) {
        case "SEND_REQ":
           return{
            ...state,
            isLoading:true,
           }
        case "REQ_SUCCESS":
           return{
            ...state,
            isLoading:false,
            data:action.paylod
           }
        case "FAILED":
           return{
            ...state,
            isLoading:false,
           error: action.paylod
           }
        default:
           return state;
    }
}

// data Fatchin function 

const fetchData =()=>{
   return (dispatch)=>{
        dispatch(sendRequest())

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>{
            dispatch(dataLoad(data)) 
        })
        .catch(err=>{
            dispatch(sendError(err.message))
        })
   } 
}

const store =createStore(fetchDataReducer,applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fetchData())