import { Alert, AsyncStorage } from 'react-native';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_URL } from '../../api';
import { setAllUsers } from '../actions/auth';
import * as types from '../types';

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


function changePassword (token, data) {
    return fetch(`${LOCAL_URL}api/users/change-password`, {
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

function* changePasswordSaga (action) {
    try {
        const response = yield call(changePassword, action.token, action.payload);
        console.log(response, 'changePasswordResponse');
    } catch (error) {
        console.log('Error => ', error);
    }
}

export default function* watchAuthSaga() {
    yield takeEvery(types.GET_ALL_USERS, getAllUsersSaga);
    yield takeEvery(types.EDIT_USER, editUserSaga);
    // yield takeEvery(changePasswordSaga)
}