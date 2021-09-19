import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    nameText: {
        fontSize: 17
    },
    dateText: {
        fontSize: 15,
        color: 'grey'
    },
    infoWrapper: {
        marginTop: 15
    },
    positionWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Text: {
        fontSize: 18,
        color: 'grey'
    },
    takeWrapper: {
        flexDirection: 'row',
        marginTop: 10
    },
    comentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    commentText: {
        color: 'blue',
        fontSize: 16,
        marginRight: 5
    },
    takeText: {
        color: 'green',
        fontSize: 16
    },
    stopWrapper: {
        flexDirection: 'row'
    },
    stopText: {
        fontSize: 16,
        color: 'red'
    },
    editText: {
        color: '#000',
        fontSize: 16,
        marginRight: 5
    },
    commentsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    commentsText: {
        fontSize: 16
    },
    entryPrice: {
        fontSize: 16,
        color: '#000',
    }
})

export default styles;