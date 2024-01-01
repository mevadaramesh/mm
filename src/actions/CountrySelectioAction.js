import {SET_SELECT_COUNTRY} from '@constants/CountrySelectionaConstant';

const setSelectedCountry = (value) => {
  return {
    type:SET_SELECT_COUNTRY,
    data:value
  }
}



export {setSelectedCountry}