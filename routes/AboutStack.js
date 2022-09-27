import About from "../screens/about";
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AboutStack()
{
    return (
            <Stack.Navigator initialRouteName="About"
                             screenOptions={{
                                 headerStyle: {
                                     backgroundColor: '#c1c1c1',
                                 },
                                 headerTintColor: '#4d4d4d',
                                 headerTitleStyle: {
                                     fontWeight: 'bold',
                                 },
                             }}>
                <Stack.Screen name="About" title='About GameZone' component={About}/>
            </Stack.Navigator>
    );
}