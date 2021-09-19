import { CREATE_NEWS, ADDED_NEWS, GET_ALL_NEWS, SET_NEWS } from '../types';

export const createNews = (formdata, token) => ({
    type: CREATE_NEWS,
    payload: formdata,
    token
})

export const addNews = (news) => ({
    type: ADDED_NEWS,
    payload: news
})

export const getAllNews = (token) => ({
    type: GET_ALL_NEWS,
    token
})

export const setNews = (news) => ({
    type: SET_NEWS,
    payload: news
})