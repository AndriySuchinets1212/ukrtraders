import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { rootReducer } from './rootReducer';
import authSaga from './sagas/auth';
import signalSaga from './sagas/signal';
import usersSaga from './sagas/users';
import newsSaga from './sagas/news';

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(authSaga);
sagaMiddleware.run(signalSaga);
sagaMiddleware.run(usersSaga);
sagaMiddleware.run(newsSaga);

export default store;