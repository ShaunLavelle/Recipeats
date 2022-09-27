import {createDrawerNavigator} from "@react-navigation/drawer";
import RecipeatsStack from "./RecipeatsStack";
import ShoppingList from "../screens/ShoppingList";

const Drawer = createDrawerNavigator();

export default function RootDrawerStack()
{
    return (
            <Drawer.Navigator>
                <Drawer.Screen name="Recipeats" component={RecipeatsStack}/>
                <Drawer.Screen name="Shopping List" component={ShoppingList}/>
            </Drawer.Navigator>
    )
}