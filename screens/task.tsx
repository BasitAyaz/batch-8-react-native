import { View, TouchableOpacity, Text, ToastAndroid } from 'react-native'
import rncStyles from 'rncstyles'
import database from '@react-native-firebase/database'

export default function Task() {

    const addTask = () => {
        let id = database().ref(`tasks/`).push().key
        database().ref(`tasks/${id}`).set({
            id: id,
            task: 'Clean The Room',
            time: JSON.parse(JSON.stringify(new Date()))
        }).then(() => {
            ToastAndroid.show('Task Added Successfully', ToastAndroid.SHORT)
        }).catch(err => {

        })
    }

    return <>
        <View>
            <TouchableOpacity onPress={addTask} style={[rncStyles.btnPrimary]}>
                <Text style={[rncStyles.textWhite, rncStyles.textCenter]}>Add Dummy Task</Text>
            </TouchableOpacity>
        </View>
    </>
}