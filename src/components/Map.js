import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Map
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

// GPS
import GetLocation from 'react-native-get-location';

// Dispatchs
import { gpsLocation } from '../reducers/gps';
import { timeZone } from '../reducers/timezone';

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: ScreenHeight,
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    message: {
        position: 'relative',
        left: 5,
        top: 70,
        zIndex: 9,
        backgroundColor: 'rgba(250, 250, 250, 0.9)',
        padding: 20,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 25,
    },
    text: {
        fontSize: 15,
    },
});

const Map = ({ gpsLocation, timeZone, latlng, timeNow }) => {
    useEffect(() => {
        timeZone();
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            gpsLocation({
                latitude: location.latitude,
                longitude: location.longitude,
            });
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        });
    }, []);

    if (!latlng.latitude) {
        return (
            <View style={styles.container}>
                <Text>Obteniendo ubicación...</Text>
            </View>
        );
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.message}>
                <Text style={styles.textTitle}>Bienvenido!</Text>
                <Text style={styles.text}>Tu tiempo es {timeNow}</Text>
            </View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: latlng.latitude,
                    longitude: latlng.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    key={1}
                    coordinate={latlng}
                    title={'yoFio'}
                    description={'Aquí'}
                />
            </MapView>
        </View>
    );
}

// Data Redux
const mapStateToProps = state => {
    return { latlng: state.gps, timeNow: state.timezone };
};

const mapDispatchToPros = dispatch => ({
    gpsLocation: latlng => dispatch(gpsLocation(latlng)),
    timeZone: () => dispatch(timeZone()),
});

export default connect(mapStateToProps, mapDispatchToPros)(Map);