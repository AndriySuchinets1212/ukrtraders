import { EDIT_USER, REGISTER_USER, SET_ALL_USERS, SET_ERROR, SET_REGISTER_MESSAGE, SET_USER } from "../types";

const initialState = {
    register_message: '',
    user: {},
    allUsers: [],
    error: ''
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTER_MESSAGE:
            return {...state, register_message: action.payload};
        case SET_USER:
            return {...state, user: action.payload};
        case SET_ALL_USERS:
            return {...state, allUsers: action.payload};
        case REGISTER_USER: 
            let newUserArr = state.allUsers;
            newUserArr.push(action.payload)
            return {...state, allUsers: newUserArr}
        case EDIT_USER:
            const newUsers = state.allUsers.map(user => {
                if(user._id == action.payload.id){
                    user.login = action.payload.login;
                    user.paid = action.payload.paid;
                    user.insured = action.payload.insured;
                    user.role = action.payload.role;
                }
                return user;
            })
            return {...state, allUsers: newUsers}
        default:
            return state;
    }
}