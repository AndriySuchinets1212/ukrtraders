import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = ({title}) => {
    return (
        <View style={styles.headerWrapper}>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default Header;