import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { setTeachingItem } from '../../redux/actions/teachingAction'; 
import { useNavigation } from '@react-navigation/native';

const InstructionItem = ({item, setTeachingItem}) => {

    const navigation = useNavigation();

    const handlerBtn = () => {
        setTeachingItem(item);
        navigation.navigate('Instruction');
    }
    return (
        <TouchableOpacity style={styles.wrapper} onPress={handlerBtn}>
            <View style={styles.container}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Image source={require('../../assets/arrow.png')} style={{width: 30, height: 20}}/>
            </View>
        </TouchableOpacity>
    )
}
const mapDispatchToProps = {
    setTeachingItem
}
export default connect(null, mapDispatchToProps)(InstructionItem);