import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    videoWrap: {
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
    videoContainer: {
        paddingHorizontal: 20
    },
    titleText: {
        color: "#000"
    },
    videoTitle: {
        color: '#000',
        fontSize: 17
    },
    video: {
        width: '90%',
        height: 150,
        backgroundColor: 'yellow',
        borderRadius: 8
    }
})

export default styles;