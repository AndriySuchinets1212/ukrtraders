import { SET_TAB_NAVIGATION, SET_USER_EMAIL } from "../types"

const initialState = {
    user_email: '',
    tabNavigation: false,
}


export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
       case SET_USER_EMAIL:
            return {...state, user_email: action.payload}
        case SET_TAB_NAVIGATION:
            return {...state, tabNavigation: !state.tabNavigation}
        default:
            return state;
    }
}