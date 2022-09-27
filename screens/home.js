import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from "../styles/global";
import {useState} from "react";
import Card from "../shared/Card";

export default function Home({navigation})
{
    const [recipeats, setRecipeats] = useState([
        {title: 'Peppercorn Turkey', ingredients: ['4 turkey fillets', '2 broccoli', '2 peppers', 'peppercorn sauce', 'rice'], body: 'lorem ipsum', key: '1'},
        {title: 'Chicken Curry', ingredients: ['4 turkey fillets', '2 broccoli', '2 peppers', 'peppercorn sauce', 'rice'], body: 'lorem ipsum', key: '2'},
        {title: 'Sticky Honey Chicken', ingredients: ['4 turkey fillets', '2 broccoli', '2 peppers', 'peppercorn sauce', 'rice'], body: 'lorem ipsum', key: '3'},
    ])
    return (
            <View style={globalStyles.container}>
                <FlatList data={recipeats} renderItem={({item}) => (
                        <TouchableOpacity onPress={() => {navigation.navigate('Ingredients', item)}}>
                            <Card>
                                <Text style={globalStyles.titleText}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                )}/>
            </View>
    )
}