import { SET_TEACHING_ITEM } from "../types";

const initialState = {
    activeItem: {}
}

export const teachingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEACHING_ITEM:
            return {...state, activeItem: action.payload}
        default:
            return state;
    }
}