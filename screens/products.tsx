import { useEffect, useState } from 'react'
import axios from 'axios'

import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import rncStyles from 'rncstyles'


export default function Products({ navigation }: any) {
    const [productList, setProductList] = useState<any>([])

    const getData = () => {
        let api = "https://fakestoreapi.com/products"
        axios.get(api).then((res) => {
            setProductList([...res.data])
            // console.log(res.data)
        }).catch((err) => {

        })
    }

    useEffect(() => {
        getData()
    }, [])

    return <>
        <View>
            <Text>Products</Text>
            <ScrollView>
                <View>
                    {productList.map((x: any, i: any) => <TouchableOpacity onPress={() => {
                        navigation.navigate('SingleProduct', x)
                    }} key={i}>
                        <View style={[rncStyles.bgWhite, rncStyles.rounded, rncStyles.shadow2, rncStyles.flexCenter, rncStyles.m1]}>
                            <Image style={{ width: 200, height: 200 }} resizeMode='contain' source={{ uri: x.image }} />
                            <View style={rncStyles.p2}>
                                <Text numberOfLines={1} style={rncStyles.fs3}>{x.title}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>)}
                </View>
            </ScrollView>
        </View>
    </>
}