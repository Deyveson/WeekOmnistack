import React, { useEffect, useState } from 'react';
import { StyleSheet, LayoutAnimation } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';

function Main(){

    const [ currentRegion, setCurrentRegion ] = useState(null);

    useEffect(() => {
        async function loadInitialPosition(){
            const { granted } = await requestPermissionsAsync();

            if(granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                
                const { latitude, longitude } = coords;
                
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })

            }
        }

        loadInitialPosition();
    },[])

    if (!currentRegion){
        return null;
    }

    return <MapView initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{ latitude: -3.0928762, longitude: -59.9666579}} />
    </MapView >
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

export default Main;