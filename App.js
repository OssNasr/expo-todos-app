import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'react-native';
import { bodyColor } from './src/globals/globalStyles';

import LoginScreen from './src/screens/loginscreen/LoginScreen';
import DrawerScreens from './src/routes/drawerScreens';
import { RecoilRoot } from 'recoil';


const { Navigator, Screen } = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>

        <StatusBar backgroundColor={bodyColor} barStyle="light-content" />

        <RecoilRoot>
            <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Screen name="Login" component={LoginScreen} />
                <Screen name="drawerScreens" component={DrawerScreens} />
            </Navigator>
        </RecoilRoot>

      </NavigationContainer>
  );
}

