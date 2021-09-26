import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';
import Header from '../../component/Header';
import { getSignal } from '../../redux/actions/signalAction';
import styles from './styles';
import SignalItem from '../../component/SignalItem';
import CreateSignal from '../../component/CreateSignal';
import LinearGradient from 'react-native-linear-gradient';


const Signals = ({user, signals, getSignal}) => {
    const [showCreate, setShowCreate] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsibscribe = navigation.addListener('focus', () => {
            getSignal(user.token);
        })
        return unsibscribe;
    }, []);

    return (
        <>
            <Header title="Сигнали"/>
            <LinearGradient style={styles.signalWrapper} colors={['#000', '#F17F3A', '#B82925']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                <FlatList 
                    data={signals}
                    renderItem={({item, index}) => {
                        return <SignalItem item={item} key={index}/>
                    }}
                />
                {user.role === 'admin' &&
                    <TouchableOpacity style={styles.createSignalBtn} onPress={() => setShowCreate(true)}>
                        <Text style={styles.btnText}>Створити сигнал</Text>
                    </TouchableOpacity>
                }
                {showCreate && 
                    <CreateSignal visible={showCreate} setVisible={() => setShowCreate(false)}/>
                }
            </LinearGradient>
       </>
    )
}

const mapStateToProps = (state) => ({
    signals: state.signal.signals,
    user: state.auth.user
})
const mapDispatchToProps = {
    getSignal
}

export default connect(mapStateToProps, mapDispatchToProps)(Signals);