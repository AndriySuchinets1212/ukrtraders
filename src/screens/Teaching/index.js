import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import DownloadLink from '../../component/DownloadLink';
import Header from '../../component/Header';
import InstructionItem from '../../component/Instruction';
import Link from '../../component/Link';
import VideoItem from '../../component/Video';
import { teaching } from '../../defaultData/teaching';
import styles from './styles';

const Teaching = () => {

    const renderItem = ({item}) => {
        if(item.type === 'link'){
            return <Link item={item}/>
        }else if (item.type === 'instruction'){
            return <InstructionItem item={item}/>
        }else if (item.type === 'downloadLink'){
            return <DownloadLink item={item}/>
        }else if (item.type === 'video'){
            return <VideoItem item={item}/>
        }else if (item.type === 'text'){
            return <Text>Text</Text>
        }else {
            return 
        }
    }
    return (
        <>
            <Header title="Навчання"/>
            <FlatList
                data={teaching}
                renderItem={renderItem}
                style={styles.listOfItemWrapper}
            />
        </>
    )
}

export default Teaching;