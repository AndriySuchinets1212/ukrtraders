import { Alert } from 'react-native';
import { call, put, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOCAL_URL } from '../../api';
import { setAllUsers, setRegisterMessage, setUser } from '../actions/auth';
import * as types from '../types';

function registerUser(data, token) {
    return fetch(`${LOCAL_URL}api/auth/register`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .then(json => json)
}

function* registerUserSaga(action) {
    try {
        const response = yield call(registerUser, action.payload, action.token);
        yield put(setRegisterMessage(response))
    }catch (error) {
        console.log(error, 'error')
    }
}

function loginUser (data) {
    return fetch(`${LOCAL_URL}api/auth/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(json => json)
}

function* loginUserSaga (action) {
    try {
        const response = yield call(loginUser, action.payload);
        console.log(response, 'response');
        if(response.message){
           Alert.alert(
                response.message
           )
        }else {
            AsyncStorage.setItem('token', response.token);
            yield put(setUser(response))
        }
    }catch (error) {
        console.log(error, 'error')
    }
}


function getAllUsers(token) {
    return fetch(`${LOCAL_URL}api/users/get-all-users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        
    })
    .then(res => res.json())
    .then(json => json)
}

function* getAllUsersSaga (action) {
    try {
        const response = yield call(getAllUsers, action.payload);
        yield put(setAllUsers(response))
    } catch (error) {

    }
}

function editUser(data, token) {
    return fetch(`${LOCAL_URL}api/users/edit-user`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        
    })
    .then(res => res.json())
    .then(json => json)
}

function* editUserSaga(action) {
    console.log(action.payload);
    try {
        const response = yield call(editUser, action.payload, action.token);
        if(response.message){
            Alert.alert(
                response.message
            )
        }
    } catch (error) {
        console.log('Error => ', error);
    }
}



export default function* watchAuthSaga() {
    yield takeEvery(types.REGISTER_USER, registerUserSaga);
    yield takeEvery(types.LOGIN_USER, loginUserSaga);
}