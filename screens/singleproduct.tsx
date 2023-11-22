import { View, Text, Image, ScrollView } from 'react-native'
import rncStyles from 'rncstyles'

export default function SingleProduct({ navigation, route }: any) {

    let obj = route.params
    return <>
        <View style={[rncStyles.p2, rncStyles.bgWhite, rncStyles.h100]}>
            <ScrollView>
                <Text style={[rncStyles.fs2, rncStyles.textPrimary]}>{obj.title}</Text>
                <Image style={{ width: '100%', height: 300 }} resizeMode='contain' source={{ uri: obj.image }} />
                <View>
                    <Text style={[rncStyles.fsL, rncStyles.textBlack]}>
                        Price : {obj.price}
                    </Text>
                </View>
            </ScrollView>
        </View>
    </>
}