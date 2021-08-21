import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#ffff',
        width: '80%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginVertical: 10
    },
    titleText: {
        color: '#000',
        fontSize: 18,
        width: '80%'
    },
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    }
})

export default  styles;