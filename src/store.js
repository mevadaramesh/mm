import {configureStore} from '@reduxjs/toolkit';
import {countryReducer} from '@reducers/CountrySelectioReducer';

const store = configureStore({
  reducer:countryReducer
});

export default store;