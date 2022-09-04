import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { contactsApi } from './contactsApi';
import { connectionsApi } from './connectionsApi';
import { filterSlice } from './filterSlice';
import { userSlice } from './userSlice';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userSlice.reducer),
    [connectionsApi.reducerPath]: connectionsApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    connectionsApi.middleware,
  ],
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);