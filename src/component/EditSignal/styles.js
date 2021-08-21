import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalWrraper: {
        height: '93%',
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    btnCancel: {
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    btn: {

    },
    btnText: {
        fontSize: 17,
        color: "blue"
    },
    inputsWrapper: {
        marginTop: 20
    },
    inputCont: {
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    inputLable: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        height: 35,
        borderRadius: 8,
        paddingHorizontal: 10,
        color: '#000',
        fontSize: 18
    },
    positionBtnContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 20,
    },
    positionBtn: {
        width: "50%",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: 7,
        height: 30,
        borderColor: 'rgba(0, 0, 0, 0.04 )',
        borderWidth: 0.5,
    },
    btnWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f7',
        padding: 2,
        borderRadius: 8
    },
    createBtn: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createSignalBtn: {
        backgroundColor: 'blue',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 15,
        marginHorizontal: 15,
        width: '90%'
    },
    createBtnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500'
    },
    error: {
        color: 'red',
        fontSize: 15,
        marginLeft: 3
    }
})

export default styles;