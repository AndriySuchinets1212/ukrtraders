import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_URL } from '../../api';
import { setSignals } from '../actions/signalAction';
import * as types from '../types';

function createSignal (data, token) {
    return fetch(`${LOCAL_URL}api/signal/create`, {
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

function* createSignalSaga (action) {
    try {
        const response = yield call(createSignal, action.payload, action.token)
        console.log('Created signal', response);
    } catch (e) {
        console.log('Error => ', e);
    }
}

function getAllSignals (token) {
    return fetch(`${LOCAL_URL}api/signal/get`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .then(json => json)
}

function* getAllSignalsSaga (action) {
    try {
        const response = yield call(getAllSignals, action.payload)
        console.log('signals: ', response);
        yield put(setSignals(response));
    } catch (error) {
        console.log('Error => ', error);
    }
}

function editSignal(data, token) {
    return fetch(`${LOCAL_URL}api/signal/edit-signal`, {
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

function* editSignalSaga(action) {
    try {
        const response = yield call(editSignal, action.payload, action.token);
        console.log(response, 'editSaga response');
    } catch (errro) {
        console.log('Error => ', error);
    }
}

export default function* watchSignalSaga() {
    yield takeEvery(types.CREATE_NEW_SIGNAL, createSignalSaga);
    yield takeEvery(types.GET_SIGNALS, getAllSignalsSaga);
    yield takeEvery(types.EDIT_SIGNAL, editSignalSaga);
}