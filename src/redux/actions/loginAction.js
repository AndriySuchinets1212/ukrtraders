import { SET_TAB_NAVIGATION, SET_USER_EMAIL } from "../types"

export const setUserEmail = (email) => ({
    type: SET_USER_EMAIL,
    payload: email
})

export const setTabNavigation = () => ({
    type: SET_TAB_NAVIGATION,
})