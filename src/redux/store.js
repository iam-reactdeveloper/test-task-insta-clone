import {configureStore} from '@reduxjs/toolkit';
import {combinedReducer} from './slices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
