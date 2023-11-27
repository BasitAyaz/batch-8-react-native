import { Image, Text, TouchableOpacity, View } from "react-native";
import rncStyles from "rncstyles";
import BAIcon from "../components/BAIcon";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useState } from "react";


export default function UploadScreen() {
    const [imgUri, setImgUri] = useState('https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg')

    const openCamera = async () => {
        let res: any = await launchCamera({
            mediaType: 'photo',
            includeBase64: true
        })
        let file = res.assets[0]
        console.log(file)
        setImgUri(`data:image/png;base64,${file.base64}`)
    }
    const openGallary = async () => {
        let res = await launchImageLibrary({
            mediaType: 'photo'
        })
        console.log(res)
    }


    return <>
        <View style={[rncStyles.h100, rncStyles.bgLight, rncStyles.flexCenter]}>
            <Text style={[rncStyles.textPrimary, rncStyles.fs2]}>Upload Image</Text>
            <View style={rncStyles.flexRow}>
                <TouchableOpacity onPress={openCamera} style={[rncStyles.p2, rncStyles.bgWhite, rncStyles.rounded, rncStyles.shadow3, rncStyles.m1]}>
                    <BAIcon name='camera' />
                </TouchableOpacity>
                <TouchableOpacity onPress={openGallary} style={[rncStyles.p2, rncStyles.bgWhite, rncStyles.rounded, rncStyles.shadow3, rncStyles.m1]}>
                    <BAIcon name='photo-library' />
                </TouchableOpacity>
            </View>
            <View style={rncStyles.flexRow}>
                <Image style={[{ width: 200, height: 200 }, rncStyles.rounded]} source={{ uri: imgUri }} />
            </View>
        </View>
    </>
}