import { createDrawerNavigator } from '@react-navigation/drawer';

const { Navigator, Screen } = createDrawerNavigator();

import TodoScreen from '../screens/todoscreen/TodoScreen';
import Header from '../components/header/Header';

import DrawerContent from '../components/drawer/DrawerContent';



export default function DrawerScreens() {

    return (
        <Navigator
            initialRouteName="todoScreen"
            screenOptions={{ header: Header }}
            drawerContent={ DrawerContent }
            >

            <Screen name="todoScreen" component={TodoScreen} />

        </Navigator>
    );
}
