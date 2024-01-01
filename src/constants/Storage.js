import AsyncStorage from '@react-native-async-storage/async-storage';


const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error saving item:', error);
  }
}


const getItem = async (key) => {
  return await AsyncStorage.getItem(key);
}

const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item:', error);
  }
};


export {
  setItem,
  getItem,
  removeItem
};