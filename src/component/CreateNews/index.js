import React, {useEffect, useState} from 'react';
import { View, Text, Modal, TouchableOpacity, Alert, Image, TouchableWithoutFeedback, TextInput } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { createNews } from '../../redux/actions/newsAction';
import styles from './styles';

const CreateNews = ({visible, setVisible}) => {
    const [uploadedPicture, setUploadedPicture] = useState('');
    const [uploadedFileType, setUploadedFileType] = useState('');
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    const clearUpload = () => {
        setUploadedPicture('');
        setUploadedFileType('');
    }

    const uploadImage = () => {
        try {
            const options = {
              noData: true,
              maxWidth: 600,
              maxHeight: 600,
              quality: 0.5,
            };
            launchImageLibrary(options, response => {
                // const blob = response.blob()
              if (response.assets[0].uri) {
                if (response.assets[0].fileSize > 5999999) {
                  Alert.alert('File size is too large. Select another, please!');
                } else {
                    const photo = {
                        name: response.assets[0].fileName,
                        type: response.assets[0].type,
                        uri: Platform.OS === "android" ? response.assets[0].uri : response.assets[0].uri.replace("file://", "")
                    }
                  setUploadedPicture(photo);
                  setUploadedFileType('Image');
                }
              }
            });
        } catch (e) { 
            console.log(e, 'error');
        }
    }

    const handlerSend = () => {
        const formData = new FormData();
        formData.append('file', uploadedPicture);
        formData.append('comment', comment);
        console.log(formData, 'formData');
        dispatch(createNews(formData, user.token))
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
                    <View style={styles.bodyContainer}>
                        <View style={styles.bodyWrapper}>
                            <Text style={styles.uploadText}>Загрузіть зображення</Text>
                            <TouchableOpacity style={styles.btnUpload} onPress={uploadImage}>
                                <Text style={styles.btnText}>Загрузити</Text>
                            </TouchableOpacity>
                        {!!uploadedPicture && 
                            <View style={styles.uploadedContainer}>
                                <Image source={{uri: `${uploadedPicture.uri}`}} style={styles.uploadedImage}/>
                                <TouchableWithoutFeedback onPress={clearUpload}>
                                    <Image
                                        style={styles.clearIcon}
                                        resizeMode={'contain'}
                                        source={require('../../assets/deleteBtn.png')}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                        }
                        </View>
                        <View style={styles.inputCont}>
                            <Text style={[styles.inputLable, {marginTop: 20}]}>Додаткова інформація</Text>
                            <TextInput 
                                style={[styles.input, {height: 80}]} 
                                numberOfLines={4}
                                multiline={true}
                                value={comment}
                                onChangeText={(e) => setComment(e)}
                                placeholder="Comment"
                            />
                        </View>
                    </View>
                    <View style={styles.createBtn}>
                        <TouchableOpacity style={styles.createUserBtn} onPress={handlerSend}>
                            <Text style={styles.createBtnText}>Створити новину</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CreateNews;