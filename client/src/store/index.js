import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { campingApi } from './apis/campingApi';

export const store = configureStore({
	reducer: {
		[campingApi.reducerPath]: campingApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(campingApi.middleware);
	},
});

/* setupListeners(store.dispatch): 
This initializes the listeners and links them to the store's dispatch method, 
enabling automatic refetching functionality.*/
setupListeners(store.dispatch);

export { useFetchCampingsQuery } from './apis/campingApi';
