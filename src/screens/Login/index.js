import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import styles from './styles';
import { setUserEmail, setTabNavigation } from '../../redux/actions/loginAction';
import { loginUser } from '../../redux/actions/auth';


const Login = ({setUserEmail, setTabNavigation, loginUser}) => {
    const [userLogin, setUserLogin] = useState('AndriyDev');
    const [userPassword, setUserPassword] = useState('admin123');

    const getToken = async() => {
        return await messaging().getToken()
    }

    useEffect(() => {
        getToken().then(res => {
            AsyncStorage.setItem('pushNotificationToken', res);
        });
    }, []);
    const loginHandler = async() => {

        setUserEmail(userLogin);
        AsyncStorage.getItem('pushNotificationToken').then(res => {
            loginUser({
                login: userLogin,
                password: userPassword,
                pushNotificationsToken: res
            })
        })
    }  

    
    return (
        <LinearGradient style={styles.container} colors={['#F17F3A', '#ED3D33', '#ED3D33']}>
            <View style={styles.logoWrapper}>
                <Image source={require('../../assets/logo.png')} style={styles.imgLogo}/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Your Login" 
                    placeholderTextColor="#fff"
                    value={userLogin}
                    onChangeText={e => setUserLogin(e)}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Your Password" 
                    placeholderTextColor="#fff"
                    value={userPassword}
                    onChangeText={e => setUserPassword(e)}
                />
            </View>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn} onPress={loginHandler}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const mapDispatchToProps = {
    setUserEmail,
    setTabNavigation,
    loginUser
}

export default connect(null, mapDispatchToProps)(Login);