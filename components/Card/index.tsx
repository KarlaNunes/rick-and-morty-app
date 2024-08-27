import { Character } from "@/@types/Character";
import { Image, View, Text } from "react-native";
import { styles } from "./styles";

type CardProps = {
    character: Character
};

export function Card({character}: CardProps) {
    return (
       <View style={styles.cardContainer}>
        <Image 
            source={{ uri: character.image }}
            alt={`character ${character.name}`}  
            style={styles.image}
        /> 

        <Text
            style={styles.text}
        >
            {character.name}
        </Text>
       </View> 
    )
}