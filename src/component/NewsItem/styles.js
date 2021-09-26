import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    newsContainer: {
        width: '75%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        paddingHorizontal: 1,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    img: {
        width: '100%', 
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    comment: {
        marginVertical: 10,
        fontSize: 17
    },
    dateText: {
        textAlign: 'right',
        marginBottom: 10,
        color: 'grey'
    },
    bottomWrapper: {
        paddingHorizontal: 10
    }
})


export default styles;