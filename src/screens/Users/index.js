import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Headers from '../../component/Header';
import CreateUser from '../../component/CreateUser';
import { getAllUsers } from '../../redux/actions/auth';
import { useNavigation } from '@react-navigation/native';
import UserItem from '../../component/UserItem';

const Users = ({getAllUsers, allUsers, user}) => {
    const [showCreateUser, setShowCreateUser] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const unsibscribe = navigation.addListener('focus', () => {
            getAllUsers(user.token);
        })
        return unsibscribe;
    }, []);

    const inputValueLet = inputValue.trim().toLowerCase();
    let usersNew = [];
    if(allUsers.length > 0){
        usersNew = allUsers.filter(row => {
            return row.login.toLowerCase().match(inputValueLet);
        })
    }
    return (
        <>
            <Headers title="Користувачі"/>
            <View style={styles.wrapper}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Шукати за логіном"
                        value={inputValue}
                        onChangeText={e => setInputValue(e)}
                    />
                </View>
                <FlatList
                    data={usersNew}
                    renderItem={({item, index}) => {
                       return <UserItem item={item}/>
                    }}
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => setShowCreateUser(true)}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {showCreateUser && <CreateUser visible={showCreateUser} setVisible={() => setShowCreateUser(false)}/>}
        </>
    )
}

const mapDispatchToProps = {
    getAllUsers,
}
const mapStateToProps = (state) => ({
    allUsers: state.auth.allUsers,
    user: state.auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);