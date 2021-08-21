import React from 'react';
import { View, Text, TouchableOpacity, Linking, Alert } from 'react-native';
import styles from './styles';

const Link = ({item}) => {

    const handlerLink = async() => {
        const supported = await Linking.canOpenURL(item.src);

        if(supported){
            await Linking.openURL(item.src)
        } else {
            Alert.alert(`Don't know how to open this URL: ${item.src}`);
        }
    }
    return (
        <View onPress={handlerLink} style={styles.btnWrapper}>
            <View style={styles.linkBtn}>
                <Text style={styles.infoText}>{item.info}</Text>
                <TouchableOpacity onPress={handlerLink}>
                    <Text style={styles.linkText}>{item.src}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Link;