import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/root.reducer'
import rootSaga from './sagas/root.saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
