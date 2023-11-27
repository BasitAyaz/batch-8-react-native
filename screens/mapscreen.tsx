import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

import mark from '../assets/mark.jpg'
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 24.9143688,
                    longitude: 67.0556823,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    image={mark}
                    title='SAIMS'
                    description="SIR Adamjee Institute"
                    coordinate={{
                        latitude: 24.9143688,
                        longitude: 67.0556823,
                    }} />
                <Marker
                    image={mark}
                    title='SAIMSasd'
                    description="SIR Adasdamjee Institute"
                    coordinate={{
                        latitude: 24.8831486,
                        longitude: 67.0678154,
                    }} />
            </MapView>
        </View>
    )
};