import React from 'react';
import styled from 'styled-components';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';

const MapBox = styled.div``;

const Map = ({ storeInfo }) => {
  const GoogleMapObj = () => {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: +storeInfo.lat, lng: +storeInfo.lng }}
      >
        <Marker position={{ lat: +storeInfo.lat, lng: +storeInfo.lng }} />
      </GoogleMap>
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(GoogleMapObj));

  return (
    <MapBox id="map">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GEOCODE_API_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '200px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </MapBox>
  );
};

export default Map;