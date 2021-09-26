import moment from 'moment';
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const NewsItem = ({news}) => {
    return (
        <View style={{paddingHorizontal: 10, paddingVertical: 15}}>
            <View style={styles.newsContainer}>
                <Image source={{uri: news.fileUrl}} style={styles.img}/>
                <View style={styles.bottomWrapper}>
                    <Text style={styles.comment}>{news.comment}</Text>
                    <Text style={styles.dateText}>{moment(news.createdAt).format('HH:mm, DD-MM-YYYY')}</Text>
                </View>
            </View>
        </View>
    )
}

export default NewsItem;