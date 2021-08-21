import React from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';


const VideoItem = ({item}) => {
    return (
        <View style={styles.videoWrap}>
            <View>
                <Text style={styles.videoTitle}>{item.title}</Text>
                <Video 
                    source={{uri: item.uri}}
                    controls={true}
                    playInBackground={true}
                    style={styles.video}
                    fullscreen={true}
                />
            </View>
        </View>
    )
}

export default VideoItem;