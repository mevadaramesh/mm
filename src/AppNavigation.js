import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getItem} from '@constants/Storage'; 

import OnBordingScreen from '@screens/OnBordingScreen';
import DashboardScreen from '@screens/DashboardScreen';
import LoginScreen from '@screens/LoginScreen';
import SelectLanguageScreen from '@screens/SelectLanguageScreen';
import SelectCategory from '@screens/SelectCategory';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const  onBordingProcessDone = getItem('onBordingProcessDone');
  let initialRouteName = 'SelectLanguageScreen';
  
  // if(onBordingProcessDone != 'Yes'){
  //   initialRouteName = 'OnBordingScreen';
  // }
  
  return (
    <NavigationContainer>
       <Stack.Navigator 
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="OnBordingScreen" component={OnBordingScreen} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SelectLanguageScreen" component={SelectLanguageScreen} />
          <Stack.Screen name="SelectCategory" component={SelectCategory} />
          
       </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigation;