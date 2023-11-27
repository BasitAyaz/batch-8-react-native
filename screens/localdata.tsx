import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import rncStyles from "rncstyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LocalData() {
    const [text, setText] = useState<any>('')
    const [list, setList] = useState<any>([])

    const add = async () => {
        try {
            list.push(text)
            const jsonValue = JSON.stringify(list);
            await AsyncStorage.setItem('todos', jsonValue);
            getData()
        } catch (e) {
            // saving error
        }
    }
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('todos');
            let data = jsonValue != null ? JSON.parse(jsonValue) : null;
            setList([...data])
        } catch (e) {
            // error reading value
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return <>
        <View style={[rncStyles.h100, rncStyles.bgLight, rncStyles.p2]}>
            <Text style={[rncStyles.textPrimary, rncStyles.fs2]}>Local Data</Text>
            <View>
                <TextInput
                    onChangeText={(e) => setText(e)}
                    style={[
                        rncStyles.input,
                        rncStyles.border1
                    ]}
                    placeholder="Todo"
                />
                <TouchableOpacity
                    onPress={add}
                    style={[
                        rncStyles.btnPrimary,
                        rncStyles.mt2
                    ]}
                >
                    <Text style={[rncStyles.textCenter, rncStyles.textWhite]}>Add</Text>
                </TouchableOpacity>
            </View>
            <View>
                {list.map((x: any, i: any) => <View style={rncStyles.p2} key={i}>
                    <Text style={rncStyles.fs4}>{x}</Text>
                </View>)}
            </View>
        </View>
    </>
}