import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15
    },
    userNameWrapper: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    userNameText: {
        fontSize: 30,
        color: "blue"
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    profileImageContainer: {
        width: 100,
        height: 100,
        backgroundColor: 'lightgrey',
        borderRadius: 50,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: "center"
    },
    passwordWrapper: {
        marginTop: 20
    },
    passHeader: {
        fontSize: 18
    },
    passwordBtn: {
        width: '100%',
        borderRadius: 4,
        borderColor: 'lightgrey',
        borderWidth: 1,
        padding: 5,
        justifyContent: 'center',
        height: 35,
        marginTop: 10
    },
    text: {
        fontSize: 20
    }
})

export default styles;