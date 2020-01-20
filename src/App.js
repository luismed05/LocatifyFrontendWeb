import React from 'react';
import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function App(props) {
  return (
    <>
        <Map
          google={window.google}
          zoom={8}
          style={{flex:1}}
          initialCenter={{lat: -15.786849,lng: -47.8723847}}
        />
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDTeiTQvNwHj5fJbKex5hoWSVskZ7qF5HA'
})(App);
