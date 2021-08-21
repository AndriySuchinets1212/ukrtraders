import React, {useEffect, useState} from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, Alert } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../redux/actions/auth';
import styles from './styles';

const EditUser = ({visible, setVisible, userItem}) => {
    const [login, setLogin] = useState(userItem.login);
    const [role, setRole] = useState(userItem.role);
    const [paid, setPaid] = useState(userItem.paid);
    const [insured, setInsured] = useState(userItem.insured);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);


    const editUserHandler = () => {
        dispatch(editUser({
            id: userItem._id,
            login: login,
            paid: paid,
            insured: insured,
            role: role
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
                        <TouchableOpacity style={styles.btn} onPress={setVisible}>
                            <Text style={styles.btnText}>Закрити</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputsWrapper}>
                        <View style={styles.inputCont}>
                            <Text style={styles.inputLable}>Логін</Text>
                            <TextInput 
                                style={styles.input} 
                                placeholder="Логін"
                                value={login}
                                onChangeText={e => setLogin(e)}
                            />
                        </View>
                    </View>
                    <View style={[styles.inputCont, {marginTop: 30}]}>
                        <Text style={styles.inputLable}>Виберіть роль користувача</Text>
                        <View style={styles.positionBtnContainer}>
                            <View style={styles.btnWrapper}>
                                <TouchableOpacity 
                                    style={[styles.positionBtn, {backgroundColor: role === 'admin' ? '#fff' : '#F2F2F7'}]}
                                    onPress={() => {setRole('admin')}}
                                >
                                    <Text>Адміністратор</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[styles.positionBtn, {backgroundColor: role === 'member' ? '#fff' : '#F2F2F7'}]}
                                    onPress={() => {setRole('member')}}
                                >
                                    <Text>Участник</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.inputCont, {marginTop: 30}]}>
                        <Text style={styles.inputLable}>Стан</Text>
                        <View style={styles.positionBtnContainer}>
                            <View style={styles.btnWrapper}>
                                <TouchableOpacity 
                                    style={[styles.positionBtn, {backgroundColor: paid === true ? '#fff' : '#F2F2F7'}]}
                                    onPress={() => {setPaid(true)}}
                                >
                                    <Text>Оплачено</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[styles.positionBtn, {backgroundColor: paid === false ? '#fff' : '#F2F2F7'}]}
                                    onPress={() => {setPaid(false)}}
                                >
                                    <Text>Не оплачено</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.inputCont, {marginTop: 30}]}>
                        <Text style={styles.inputLable}>Страховка</Text>
                        <View style={styles.positionBtnContainer}>
                            <View style={styles.btnWrapper}>
                                <TouchableOpacity 
                                    style={[styles.positionBtn, {backgroundColor: insured === true ? '#fff' : '#F2F2F7'}]}
                                    onPress={() => {setInsured(true)}}
                                >
                                    <Text>Застрахований</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[styles.positionBtn, {backgroundColor: insured === false ? '#fff' : '#F2F2F7'}]}
                                    onPress={() => {setInsured(false)}}
                                >
                                    <Text>Не застрахований</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.createBtn}>
                        <TouchableOpacity style={styles.createUserBtn} onPress={editUserHandler}>
                            <Text style={styles.createBtnText}>Змінити користувача</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default EditUser;