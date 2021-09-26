import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#ECECEC",
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
    
})


export default styles;