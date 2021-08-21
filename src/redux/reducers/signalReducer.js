import { signals } from "../../defaultData/signals";
import { CREATE_NEW_SIGNAL, EDIT_SIGNAL, GET_SIGNALS, SET_SIGNALS } from "../types";

const initialState = {
    signals: []
}

export const signalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SIGNALS:
            return {...state, signals: action.payload}
        case CREATE_NEW_SIGNAL: 
            let newSignal = state.signals;
            newSignal.push(action.payload)
            return {...state, signals: newSignal}
        case EDIT_SIGNAL:
            const newSignals = state.signals.map(signal => {
                if(signal._id == action.payload.id){
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