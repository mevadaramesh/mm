import { registerRootComponent } from 'expo';
import store from './src/store';
import App from './App';
import { Provider } from 'react-redux'
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const appComponent = () => {
  return (
    <Provider store={store}>
       <App /> 
    </Provider>
  )
}
registerRootComponent(appComponent);
