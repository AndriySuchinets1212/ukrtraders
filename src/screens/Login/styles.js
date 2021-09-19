import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    logoWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 0.5,
    },
    imgLogo: {
        width: 200, 
        height: 200
    },
    inputContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderColor: '#fff',
        borderBottomWidth: 2,
        borderRadius: 10,
        width: '80%',
        height: 40,
        padding: 5,
        paddingLeft: 10,
        fontSize: 20,
        marginBottom: 20,
        color: '#fff'
    },
    btnWrapper: {
        flex: 0.2,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    btn: {
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 20
    }
})


export default styles; 