import { useEffect, useState } from 'react';

type stateProps = {
  loaded: boolean;
  coordinates?: {
    lat?: number;
    lng?: number;
  };
  error?: GeolocationPositionError | { code: number; message: string };
};

export const useGeolocation = () => {
  const [location, setLocation] = useState<stateProps>({
    loaded: false,
    coordinates: {
      lat: 0,
      lng: 0,
    },
  });

  const onSuccess = (location: GeolocationPosition) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        console.log('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        console.log('The request to get user location timed out.');
        break;
      default:
        console.log('Geolocation: An unknown error occurred.');
        break;
    }

    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setLocation({
        loaded: true,
        error: {
          code: 0,
          message: 'Geolocation not supported',
        },
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};
