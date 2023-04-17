import React, { useState, useEffect } from 'react';

function Map({ address }) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    script.onload = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 8,
      });
      setMap(map);
    };
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (map) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          const location = results[0].geometry.location;
          map.setCenter(location);
          new window.google.maps.Marker({
            map,
            position: location,
          });
        }
      });
    }
  }, [address, map]);

  return <div id="map" style={{ height: '400px' }}></div>;
}

export default Map;
