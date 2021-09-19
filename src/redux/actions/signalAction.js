import { ADD_SIGNALS, CREATE_NEW_SIGNAL, EDIT_SIGNAL, EDIT_SIGNAL_USERS, GET_SIGNALS, SET_SIGNALS } from "../types";

export const createNewSignal = (signal, token) => ({
    type: CREATE_NEW_SIGNAL,
    payload: signal,
    token
})

export const addSignals = (signal) => ({
    type: ADD_SIGNALS,
    payload: signal
})

export const getSignal = (token) => ({
    type: GET_SIGNALS,
    payload: token
})

export const setSignals = (signals) => ({
    type: SET_SIGNALS,
    payload: signals
})

export const editSignal = (signal, token) => ({
    type: EDIT_SIGNAL,
    payload: signal,
    token
})

export const editSignalsUser = (signal) => ({
    type: EDIT_SIGNAL_USERS,
    payload: signal
})