import { SET_SELECT_COUNTRY } from '@constants/CountrySelectionaConstant';

const initialState = {
  selectedCountry: null,
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECT_COUNTRY:
      return {
        ...state,
        selectedCountry: action.data // Update the selectedCountry with the new value
      };
    default:
      return state;
  }
};

export { countryReducer };
