import {configureStore} from "@reduxjs/toolkit";
import userData from "./reduser/users"
export default configureStore({
    reducer:{
        userData : userData
    },
})