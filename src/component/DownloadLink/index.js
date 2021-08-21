import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

const DownloadLink = ({item}) => {

    const handlerLink = async(link) => {
        const supported = await Linking.canOpenURL(link);
        if(supported){
            await Linking.openURL(link);
        } else {
            Alert.alert(`Don't know how to open this URL: ${link}`);
        }
    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Встановити Додаток Metatrader4</Text>
            <TouchableOpacity onPress={() => handlerLink(item.linkForIOS)}>
                <Text style={styles.linkText}>ВСТАНОВИТИ ДЛЯ IOS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlerLink(item.linkForAndroid)}>
                <Text style={styles.linkText}>ВСТАНОВИТИ ДЛЯ ANDROID</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DownloadLink;