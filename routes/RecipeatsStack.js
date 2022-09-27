import Home from "../screens/home";
import {createStackNavigator} from '@react-navigation/stack';
import Ingredients from "../screens/Ingredients";

const Stack = createStackNavigator();

export default function RecipeatsStack()
{
    return (
            <Stack.Navigator initialRouteName="Home"
                             screenOptions={{
                                 headerStyle: {
                                     backgroundColor: '#c1c1c1',
                                 },
                                 headerTintColor: '#4d4d4d',
                                 headerTitleStyle: {
                                     fontWeight: 'bold',
                                 },
                             }}>
                <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
                <Stack.Screen name='Ingredients' component={Ingredients} />
            </Stack.Navigator>
    );
}