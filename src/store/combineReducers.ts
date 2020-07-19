import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const examplePersistConfig = {
//   key: 'example',
//   storage: storage,
// };

export const rootReducer = combineReducers({
  // example: persistReducer(examplePersistConfig, ExampleReducer),
  // example2: Example2Reducer
});

export type RootState = ReturnType<typeof rootReducer>;
