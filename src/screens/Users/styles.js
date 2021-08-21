import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 0.88
    },
    btnContainer: {
        flex: 0.12,
        alignItems: 'flex-end',
        paddingHorizontal: 15,
        position: 'absolute',
        bottom: 10,
        right: 0
    },
    btn: {
        backgroundColor: '#F17C3A',
        borderRadius: 50,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 40
    },
    inputContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    input: {
        borderRadius: 4,
        borderWidth: 1,
        height: 30,
        borderColor: 'lightgray',
        paddingHorizontal: 10,
        fontSize: 18
    }
})

export default styles;