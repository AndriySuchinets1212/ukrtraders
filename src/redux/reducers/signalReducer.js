import { signals } from "../../defaultData/signals";
import { ADD_SIGNALS, GET_SIGNALS, SET_SIGNALS, EDIT_SIGNAL_USERS } from "../types";

const initialState = {
    signals: []
}

export const signalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SIGNALS:
            return {...state, signals: action.payload}
        case ADD_SIGNALS: 
            const map = new Map();
            const newSignal = state.signals;
            newSignal.push(action.payload);
            for(let value of newSignal) {
                map.set(value._id, value)
            }
            const final = []
            map.forEach(item => final.push(item))
            return {...state, signals: final}
        case EDIT_SIGNAL_USERS:
            const newSignals = state.signals.map(signal => {
                if(signal._id == action.payload._id){
                    signal.couplesName = action.payload.couplesName;
                    signal.entryPrice = action.payload.entryPrice;
                    signal.position = action.payload.position;
                    signal.stopLoss = action.payload.stopLoss;
                    signal.takeProfit1 = action.payload.takeProfit1;
                    signal.takeProfit2 = action.payload.takeProfit2;
                }
                return signal;
            })
            return {...state, signals: newSignals};
        default:
            return state;
    }
}