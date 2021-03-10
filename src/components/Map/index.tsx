import React, { FC } from 'react';

import { MapContainer as LeafletMap, TileLayer, Marker } from 'react-leaflet';

interface IPosition {
  latitude: number;
  longitude: number;
}

interface MapProps {
  markers: IPosition[];
  initialPosition: IPosition;
}

const Map: FC<MapProps> = ({ markers, initialPosition }) => {
  return (
    <LeafletMap
      zoomControl={false}
      style={{
        height: '400px',
        width: '100%',
        borderRadius: '4px',
        backgroundColor: '#262626',
      }}
      center={[initialPosition.latitude, initialPosition.longitude]}
      zoom={5}
    >
      <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png" />
      {markers.map(marker => (
        <Marker
          key={`${marker.latitude}-${marker.longitude}`}
          position={[marker.latitude, marker.longitude]}
        />
      ))}
    </LeafletMap>
  );
};

export default Map;
