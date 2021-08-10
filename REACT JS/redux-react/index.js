const redux = require('redux');
const createReduxStore = redux.createStore;
const BUY_CAKE = 'BUY_CAKE'


const buyCake = () => {
    return {
        type : BUY_CAKE,
        info : "First redux action"
    }
}

const initialState = {
    numberOfCakes : 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE : return {
            ...state,
            numberOfCakes : state.numberOfCakes - 1
        }
        default : return state
    }
}

const store = createReduxStore(reducer)

console.log('Initial State : ' ,store.getState());
const unsubscribe =  store.subscribe(() => {console.log("Updated state : ", store.getState())})
store.dispatch(buyCake);
store.dispatch(buyCake);
store.dispatch(buyCake);
unsubscribe();
