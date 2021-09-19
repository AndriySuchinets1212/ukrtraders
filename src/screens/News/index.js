import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CreateNews from '../../component/CreateNews';
import Header from '../../component/Header';
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
                <ScrollView>
                    {allNews.map(item => {
                        return (<View>
                            <Text>{item.comment}</Text>
                            <Image source={{uri: item.fileUrl}} style={{width: 60, height: 60}}/>
                        </View>
                    )})}
                </ScrollView>
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