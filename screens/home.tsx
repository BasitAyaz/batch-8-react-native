import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import rncstyles from 'rncstyles'

export default function Home({ navigation }: any) {
    return <>
        <View>
            <Icon name='home' size={50} color='black' />
            <Text>Home</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Products')
            }}>
                <Text style={rncstyles.link}>Products</Text>
            </TouchableOpacity>
        </View>
    </>
}