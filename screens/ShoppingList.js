import {Text, View} from 'react-native';
import {globalStyles} from "../styles/global";

export default function ShoppingList()
{
    return (
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>Shopping List</Text>
            </View>
    )
}