import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        height: 80,
        width: 300,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 16,
        borderRadius: 10,
        padding: 16
    },
    text: {
        color: '#000000',
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    }  
});
