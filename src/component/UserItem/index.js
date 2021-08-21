import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import EditUser from '../EditUser';
import styles from './styles';

const UserItem = ({item}) => {
    const [editUserModal, setEditUserModal] = useState(false);
    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.nameText}>{item.login}</Text>
                <View style={{flexDirection: 'row', marginTop: 7}}>
                    <Text style={styles.paidStatusText}>Статус підписки: </Text>
                    <Text style={[styles.paidStatusText, {color: item.paid ? 'green' : 'red'}]}>{item.paid ? `Оплачено` : `Не оплачено`}</Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => setEditUserModal(true)}>
                    <Image source={require('../../assets/edit.png')} style={{height: 25, width: 25}} />
                </TouchableOpacity>
            </View>
            {editUserModal && <EditUser visible={editUserModal} setVisible={() => setEditUserModal(false)} userItem={item}/>}
        </View>
    )
}

export default UserItem;