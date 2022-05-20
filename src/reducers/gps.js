// Constants
const GPS_LOCATION = 'GPS_LOCATION';

export const gpsLocation = latlng => ({
    type: GPS_LOCATION,
    payload: latlng,
});

export default (state = [], action) => {
    switch(action.type) {
        case GPS_LOCATION:
            return action.payload;
        default:
            return state;
    }
}