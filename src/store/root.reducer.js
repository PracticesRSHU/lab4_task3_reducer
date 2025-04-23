import { combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";

const rootReducer=combineReducers({
    counter:counterReducer
    //books: booksReducer,
    //users: usersReducer,
    //... other reducers
});

export default rootReducer;

