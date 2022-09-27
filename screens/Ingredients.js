import {Text} from 'react-native';
import IngredientComponent from "../shared/IngredientComponent";

export default function Ingredients({route, navigation})
{
    const {title, ingredients, body} = route.params;
    return (
            <IngredientComponent>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <Text> {ingredients.map((item, index) => (
                        <Item key={index} item={item} />
                ))}</Text>
            </IngredientComponent>
    )
}