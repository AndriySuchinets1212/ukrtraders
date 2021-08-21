import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { editSignal } from '../../redux/actions/signalAction';
import styles from './styles';

const EditSignal = ({visible, setVisible, item}) => {
    const [couplesName, setCouplesName] = useState(item.couplesName);
    const [position, setPosition] = useState(item.position);
    const [entryPrice, setEntryPrice] = useState(item.entryPrice);
    const [takeProfit1, setTakeProfit1] = useState(item.takeProfit1);
    const [takeProfit2, setTakeProfit2] = useState(item.takeProfit2);
    const [stopLoss, setStopLoss] = useState(item.stopLoss);
    const [comment, setComment] = useState(item.comment);
    const [error, setError] = useState(false);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    
    const createButtonHandler = () => {
        dispatch(editSignal({
            id: item._id,
            couplesName: couplesName,
            position: position,
            entryPrice: entryPrice,
            stopLoss: stopLoss,
            takeProfit1: takeProfit1,
            takeProfit2: takeProfit2,
            comments: comment,
        }, user.token))
        setVisible();
    }
    return (
        <Modal 
            visible={visible}
            animationType="slide"
            transparent={true}
        >
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View style={styles.modalWrraper}>
                    <View style={styles.btnCancel}>
                        <TouchableOpacity style={styles.btn} onPress={() => {setVisible();}}>
                            <Text style={styles.btnText}>Закрити</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputsWrapper}>
                        <View style={styles.inputCont}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.inputLable}>Назва пари</Text>
                                {error && <Text style={styles.error}>*</Text>}
                            </View>
                            <TextInput 
                                style={styles.input} 
                                value={couplesName}
                                onChangeText={(e) => setCouplesName(e)}
                                placeholder="Назва пари"
                            />
                        </View>
                        <View style={styles.positionBtnContainer}>
                            <View style={styles.btnWrapper}>
                                <TouchableOpacity 
                                    onPress={() => setPosition('BUY')}
                                    style={[styles.positionBtn, {backgroundColor: position === 'BUY' ? 'blue' : 'transparent'}]}
                                >
                                    <Text style={{color: position === 'BUY' ? '#fff' : '#000', fontSize: 15, fontWeight: '600'}}>BUY</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => setPosition('SELL')}
                                    style={[styles.positionBtn, {backgroundColor: position === 'SELL' ? 'red' : 'transparent'}]}
                                >
                                    <Text style={{color: position === 'SELL' ? '#fff' : '#000', fontSize: 15, fontWeight: '600'}}>SELL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputCont}>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <Text style={styles.inputLable}>Entry Price</Text>
                                {error && <Text style={styles.error}>*</Text>}
                            </View>
                            <TextInput 
                                style={styles.input} 
                                value={entryPrice}
                                onChangeText={(e) => setEntryPrice(e)}
                                placeholder="Entry price"
                            />
                        </View>
                        <View style={styles.inputCont}>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <Text style={styles.inputLable}>Take Profit 1</Text>
                                {error && <Text style={styles.error}>*</Text>}
                            </View>
                            <TextInput 
                                style={styles.input} 
                                value={takeProfit1}
                                onChangeText={(e) => setTakeProfit1(e)}
                                placeholder="Take profit 1"
                            />
                        </View>
                        <View style={styles.inputCont}>
                                <Text style={[styles.inputLable, {marginTop: 20}]}>Take Profit 2</Text>
                            <TextInput 
                                style={styles.input} 
                                value={takeProfit2}
                                onChangeText={(e) => setTakeProfit2(e)}
                                placeholder="Take profit 2"
                            />
                        </View>
                        <View style={styles.inputCont}>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <Text style={styles.inputLable}>Stop Loss</Text>
                                {error && <Text style={styles.error}>*</Text>}
                            </View>
                            <TextInput 
                                style={styles.input} 
                                value={stopLoss}
                                onChangeText={(e) => setStopLoss(e)}
                                placeholder="Stop loss"
                            />
                        </View>
                        <View style={styles.inputCont}>
                            <Text style={[styles.inputLable, {marginTop: 20}]}>Comment</Text>
                            <TextInput 
                                style={[styles.input, {height: 80}]} 
                                numberOfLines={4}
                                multiline={true}
                                value={comment}
                                onChangeText={(e) => setComment(e)}
                                placeholder="Comment"
                            />
                        </View>
                        {error && 
                            <View style={{paddingHorizontal: 20, marginTop: 3}}>
                                <Text style={styles.error}>Fill in all required fields.</Text>
                            </View>
                        }
                    </View>
                    <View style={styles.createBtn}>
                        <TouchableOpacity style={styles.createSignalBtn} onPress={createButtonHandler}>
                            <Text style={styles.createBtnText}>Змінити сигнал</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default EditSignal;