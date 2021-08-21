import React, {useEffect, useState} from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, Alert } from 'react-native';
import { connect, useSelector } from 'react-redux';
import styles from './styles';
import { registerUser } from '../../redux/actions/auth';

const CreateUser = ({visible, setVisible, registerUser, register_message}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');
    const [paid, setPaid] = useState(false);
    const [insured, setInsured] = useState(false);

    const user = useSelector(state => state.auth.user);

    const clearState = () => {
        setLogin('');
        setPassword('');
        setRole('admin');
        setPaid(false);
        setInsured(false);
    }
    const generatePassword = () => {
        let length = 12,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        setPassword(retVal);
    }

    const createUser = async() => {
        registerUser({
            login,
            password,
            paid,
            insured,
            role
        }, user.token);
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
                    <View style={[styles.inputCont, {marginTop: 10}]}>
                        <Text style={styles.inputLable}>Пароль</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder="Пароль"
                            value={password}
                            onChangeText={e => setPassword(e)}
                        />
                        <TouchableOpacity style={styles.generateBtn} onPress={generatePassword}>
                            <Text style={styles.generateText}>Згенерувати пароль</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.inputCont, {marginTop: 10}]}>
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
                    <View style={[styles.inputCont, {marginTop: 10}]}>
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
                    <View style={[styles.inputCont, {marginTop: 10}]}>
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
                        <TouchableOpacity style={styles.createUserBtn} onPress={createUser}>
                            <Text style={styles.createBtnText}>Створити користувача</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const mapDispatchToProps = {
    registerUser
}
const mapStateToProps = (state) => ({
    register_message: state.auth.register_message
})
export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);