import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const Map = () => {
    const mapContainerStyle = {
        height: '400px',
        width: '100%'
    }

    const center = {
        lat: 37.7749,
        lng: -122.4194
    }

    return (
        <LoadScript>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={12}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
 };

export default Map;