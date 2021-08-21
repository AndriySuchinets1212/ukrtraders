import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, View, Text } from 'react-native';
import { AsyncStorage } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import Login from '../screens/Login';
import Signals from '../screens/Signals';
import Teaching from '../screens/Teaching';
import Instruction from '../screens/Instruction';
import Users from '../screens/Users';

const Tab = createBottomTabNavigator();

const TabNavigation = ({user}) => {
    const getTabBarVisible = (route) => {
        const routeName = route.state 
        ? route.state.routes[route.state.index].name
        : "";
        if(routeName === 'Instruction'){
            return false;
        }
        return true;
    }
    return (
        <Tab.Navigator tabBarOptions={{
            style: {backgroundColor: '#F17F3A', paddingTop: 15},
            labelStyle: {fontSize: 15, color: '#fff', fontWeight: '500'}
        }}>
            <Tab.Screen name="Сигнали" component={Signals} options={{
                tabBarIcon: () => (
                    <Image source={require('../assets/signalImage.png')} style={{width: 25, height: 25}}/>
                )
            }}/>
            <Tab.Screen name="Навчання" component={TeachingNAvigation} options={({route}) => ({
                tabBarVisible: getTabBarVisible(route),
                 tabBarIcon: () => (
                     <Image source={require('../assets/teaching.png')} style={{width: 25, height: 25, marginBottom: 10}}/>
                 )
            })}/>
            {/* <Tab.Screen name="Профіль" options={{
                tabBarIcon: () => (
                    <Image source={require('../assets/signalImage.png')} style={{width: 25, height: 25}}/>
                )
            }}/> */}
            {user.role === 'admin' &&
                <Tab.Screen name="Користувачі" component={Users} options={({route}) => ({
                    tabBarVisible: getTabBarVisible(route),
                     tabBarIcon: () => (
                         <Image source={require('../assets/users.png')} style={{width: 25, height: 25, marginBottom: 10}}/>
                     )
                })}/>
            }
            
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}

const TeachingNAvigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen component={Teaching} name="Teaching"/>
            <Stack.Screen component={Instruction} name="Instruction"/>
        </Stack.Navigator>
    )
}
const MainNavigation = ({user}) => {
    const [token, setToken] = useState(null);
    AsyncStorage.getItem('token').then(res => setToken(res));
    return (
        <NavigationContainer>
            {user.token ?
                <TabNavigation user={user}/>
            :
                <StackNavigation />
            }
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user
}) 
export default connect(mapStateToProps, null)(MainNavigation);