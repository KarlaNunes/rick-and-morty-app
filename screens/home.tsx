import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { Character } from "@/@types/Character";
import { getCharacters } from "@/services/getCharacters";
import { Card } from "@/components/Card";


export default function HomeScreen() {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const fetchCharacters = async() => {
            try {
                const data = await getCharacters();
                setCharacters(data);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };

        fetchCharacters();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Rick and Morty</Text>

            <FlatList 
                data={characters}
                renderItem={({item}) => <Card character={item}/> }
            />
        </View>
    )
}