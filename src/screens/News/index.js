import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CreateNews from '../../component/CreateNews';
import Header from '../../component/Header';
import NewsItem from '../../component/NewsItem';
import { getAllNews } from '../../redux/actions/newsAction';
import styles from './styles';

const News = ({navigation}) => {
    const [addNewModal, setAddNewModal] = useState(false)
    const user = useSelector(state => state.auth.user);
    const allNews = useSelector(state => state.news.allNews);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsibscribe = navigation.addListener('focus', () => {
            dispatch(getAllNews(user.token));
        })
        return unsibscribe;
    }, []);

    return (
        <>
            <Header title="Новини"/>
            <View style={styles.wrapper}>
                <FlatList
                    style={{flex: 1, paddingBottom: 20}}
                    data={allNews.sort((a, b) => b.createdAt - a.createdAt)}
                    initialScrollIndex={allNews.length - 1}
                    onScrollToIndexFailed={() => console.log('Scroll failed')}
                    renderItem={({item, index}) => {
                        return <NewsItem news={item} key={index}/>
                    }}
                />
                {user.role === 'admin' &&
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={() => setAddNewModal(true)}>
                            <Text style={styles.btnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                }
                {addNewModal && <CreateNews visible={addNewModal} setVisible={() => setAddNewModal(false)}/>}
            </View>
        </>
    )
}

export default News;