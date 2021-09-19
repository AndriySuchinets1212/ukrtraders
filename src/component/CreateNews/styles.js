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
    bodyContainer: {
        marginTop: 20
    },
    bodyWrapper: {
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    uploadText: {
        fontSize: 18
    },
    createBtn: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
        alignItems: 'center'
    },
    createUserBtn: {
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
    btnUpload: {
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
        height: 35,
        marginTop: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    btnText: {
        fontSize: 16,
        color: 'blue'
    },
    uploadedImage: {
        width: 200,
        height: 200,
        borderRadius: 9,
    },
    uploadedContainer: {
        borderRadius: 8,
        alignItems: 'flex-start',
        width: '100%',
        flexDirection: 'row',
        marginTop: 20
    },
    clearIcon: {
        height: 23, 
        width: 23,
        marginTop: -10
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
})


export default styles;