import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { rootReducer } from './rootReducer';
import authSaga from './sagas/auth';
import signalSaga from './sagas/signal';

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(authSaga);
sagaMiddleware.run(signalSaga);

export default store;