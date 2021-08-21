import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../component/Header';
import styles from './styles';

const Instruction = ({activeItem}) => {
    return (
        <>
            <Header title="Інструкція"/>
            <View style={styles.wrapper}>
                <FlatList 
                    style={styles.listImage}
                    data={activeItem.images}
                    renderItem={(item, index) => (
                        <View style={styles.imageWrapper} key={index}>
                            <Image source={item} style={{width: '90%', height: '90%',}}/>
                        </View>
                    )}
                />
                    {/* <View style={styles.infoWrapper}>
                        <Text style={styles.infoText}>{activeItem.info}</Text>
                    </View> */}
            </View>
        </>
    )
}
const mapStateToProps = (state) => ({
    activeItem: state.teaching.activeItem
})
export default connect(mapStateToProps, null)(Instruction);