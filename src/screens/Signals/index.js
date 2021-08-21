import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import Header from '../../component/Header';
import { getSignal } from '../../redux/actions/signalAction';
import styles from './styles';
import SignalItem from '../../component/SignalItem';
import CreateSignal from '../../component/CreateSignal';

const Signals = ({user, signals, getSignal}) => {
    const [showCreate, setShowCreate] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const unsibscribe = navigation.addListener('focus', () => {
            getSignal(user.token);
        })
        return unsibscribe;
    }, []);

    return (
        <>
            <Header title="Сигнали"/>
            <View style={styles.signalWrapper}>
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
            </View>
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