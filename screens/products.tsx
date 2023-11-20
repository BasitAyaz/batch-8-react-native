import { useEffect, useState } from 'react'
import axios from 'axios'

import { View, Text } from 'react-native'


export default function Products() {
    const [productList, setProductList] = useState<any>([])

    const getData = () => {
        let api = "https://fakestoreapi.com/products"
        axios.get(api).then((res) => {
            setProductList([...res.data])
            console.log(res.data)
        }).catch((err) => {

        })
    }

    useEffect(() => {
        getData()
    }, [])

    return <>
        <View>
            <Text>Products</Text>
        </View>
    </>
}