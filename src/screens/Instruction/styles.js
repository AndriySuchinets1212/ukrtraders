import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#ECECEC"
    },
    listImage: {
        flex: 1,
    },
    imageWrapper: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        marginHorizontal: 20,
        marginVertical: 15,
        alignItems: "center",
    },
    infoWrapper: {
        marginVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        width: '80%',
        marginHorizontal: 20,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    infoText: {
        fontSize: 18,
        color: '#F17C3A'
    }
})

export default styles;