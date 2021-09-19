import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { useSelector } from 'react-redux';
import Header from '../../component/Header';
import styles from './styles';

const Profile = () => {
    const user = useSelector(state => state.auth.user);

    return (
        <>
            <Header title="Профіль"/>
            <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                    <View style={styles.profileImageContainer}>
                        <Image source={require('../../assets/profile.png')} style={{width: 60, height: 60}}/>
                    </View>
                </View>
                <View style={styles.userNameWrapper}>
                    <Text style={styles.userNameText}>{user.login}</Text>
                </View>
                <View style={styles.passwordWrapper}>
                    <Text style={styles.passHeader}>Змінити пароль</Text>
                    <TouchableOpacity style={styles.passwordBtn}>
                        <TextInput
                            placeholder="Введіть старий пароль"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Profile;