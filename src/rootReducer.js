import {countryReducer} from '@reducers/CountrySelectioReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  country: countryReducer // Use a key ('country') to identify this reducer's slice in the store
});


 