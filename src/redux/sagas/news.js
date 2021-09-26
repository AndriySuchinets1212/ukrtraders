import { Alert } from 'react-native';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_URL } from '../../api';
import { setNews } from '../actions/newsAction';
import * as types from '../types';

function createNews(data, token) {
    console.log(data, 'dataSaga')
    return fetch(`${LOCAL_URL}api/news/add-news`, {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .then(json => json)
}

function* createNewsSaga(action) {
    try {
        const response = yield call(createNews, action.payload, action.token);
        console.log(response, 'responseNews')
        Alert.alert(response.message);
    }catch (e) {
        console.log(e, 'error');
    }
}

function getAllNews(token) {
    return fetch(`${LOCAL_URL}api/news/get`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .then(json => json)
}

function* getAllNewsSaga(action) {
    try {
        const response = yield call(getAllNews, action.token)
        yield put(setNews(response));
    } catch (error) {
        console.log(error, 'error-news')
    }
}

export default function* watchNewsSaga() {
    yield takeEvery(types.CREATE_NEWS, createNewsSaga);
    yield takeEvery(types.GET_ALL_NEWS, getAllNewsSaga);
}