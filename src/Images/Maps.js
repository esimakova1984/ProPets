import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Maps extends Component {
    render() {
        const mapStyles = {
            width: "100%",
            height: "100%",
        };
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 9.761927, lng: 79.95244 }}
            >
                <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "API_KEY",
})(Maps);