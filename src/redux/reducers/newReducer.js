import { ADDED_NEWS, GET_ALL_NEWS, SET_NEWS } from "../types";

const initialState = {
    allNews: []
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {...state, allNews: action.payload}
        case ADDED_NEWS:
            const map = new Map();
            const newSNews = state.allNews;
            newSNews.push(action.payload);
            for(let value of newSNews) {
                map.set(value._id, value)
            }
            const final = []
            map.forEach(item => final.push(item))
            return {...state, allNews: final}
        default:
            return state;
    }
}