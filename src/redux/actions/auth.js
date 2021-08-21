import { DELETE_USER, EDIT_USER, GET_ALL_USERS, LOGIN_USER, REGISTER_USER, SET_ALL_USERS, SET_ERROR, SET_REGISTER_MESSAGE, SET_USER } from "../types";

export const registerUser = (data, token) => ({
    type: REGISTER_USER,
    payload: data,
    token
})

export const setRegisterMessage = (message) => ({
    type: SET_REGISTER_MESSAGE,
    payload: message
})

export const loginUser = (data) => ({
    type: LOGIN_USER,
    payload: data
})

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export const getAllUsers = (token) => ({
    type: GET_ALL_USERS,
    payload: token
})

export const setAllUsers = (users) => ({
    type: SET_ALL_USERS,
    payload: users
})

export const editUser = (user, token) => ({
    type: EDIT_USER,
    payload: user,
    token
})

export const deleteUser = (id, token) => ({
    type: DELETE_USER,
    payload: id,
    token
})

