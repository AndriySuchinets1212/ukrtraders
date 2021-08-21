import { SET_TEACHING_ITEM } from "../types";

export const setTeachingItem = (item) => ({
    type: SET_TEACHING_ITEM,
    payload: item
})