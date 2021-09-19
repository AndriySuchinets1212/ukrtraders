import React, { useState } from 'react';
import moment from 'moment';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import EditSignal from '../EditSignal';

const SignalItem = ({item}) => {
    const [showInfo, setShowInfo] = useState(false);
    const [editSignal, setEditSignal] = useState(false);
    const user = useSelector(state => state.auth.user);

    return (
        <TouchableOpacity style={styles.wrapper} onPress={() => setShowInfo(!showInfo)}>
            <View style={styles.titleWrapper}>
                <Text style={[styles.nameText, {color: item.position === 'SELL' ? 'red' : 'blue'}]}>{item.couplesName}</Text>
                <Text style={styles.dateText}>{moment(item.createdAt).format("YYYY-MM-DD, LT")}</Text>
            </View>
            {showInfo && 
                <View style={styles.infoWrapper}>
                    <View style={styles.positionWrapper}>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.Text}>Position: </Text>
                            <Text style={{color: item.position === 'SELL' ? 'red' : 'blue', fontSize: 17}}>{item.position}</Text>
                        </View>
                        <View style={styles.stopWrapper}>
                            <Text style={styles.Text}>Stop loss: </Text>
                            <Text style={styles.stopText}>{item.stopLoss}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 13}}>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.Text}>Entry price: </Text>
                            <Text style={styles.entryPrice}>{item.entryPrice}</Text>
                        </View>
                        {user.role === 'admin' && 
                            <TouchableOpacity style={styles.comentWrapper} onPress={() => setEditSignal(true)}>
                                <Text style={styles.editText}>Змінити</Text>
                                <Image source={require('../../assets/edit.png')} style={{width: 20, height: 20}}/>
                            </TouchableOpacity>
                        }
                    </View>
                    <View>
                        <View style={styles.takeWrapper}>
                            <Text style={styles.Text}>Take Profit 1: </Text>
                            <Text style={styles.takeText}>{item.takeProfit1}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: !!item.takeProfit2 ? 'space-between' : 'flex-end'}}>
                        {!!item.takeProfit2  &&
                            <View style={styles.takeWrapper}>
                                <Text style={styles.Text}>Take Profit 2: </Text>
                                <Text style={styles.takeText}>{item.takeProfit2}</Text>
                            </View> 
                        }
                        {editSignal && <EditSignal visible={editSignal} setVisible={() => setEditSignal(false)} item={item}/>}
                    </View>
                    {!!item.comments && 
                        <View style={styles.commentsWrapper}>
                            <Text style={styles.Text}>Comment: </Text>
                            <Text style={styles.commentsText}>{item.comments}</Text>
                        </View>
                    }
                </View>
            }
        </TouchableOpacity>
    )
}

export default SignalItem;