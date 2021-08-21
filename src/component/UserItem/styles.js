import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        justifyContent: 'space-between'
    },
    nameText: {
        fontSize: 18,
        color: '#000'
    },
    paidStatusText: {
        fontSize: 14,
        color: "blue"
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default styles;