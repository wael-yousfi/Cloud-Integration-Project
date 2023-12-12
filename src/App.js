import React from 'react';
//import { GoogleMap, LoadScript } from 'google-map-react'
//import { GoogleMap, LoadScript } from '@react-google-maps/api';
import GoogleMap from 'google-map-react';
//import { LoadScript } from '@react-google-maps/api';
//import Script from 'react-load-script'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// function App() {
//   const mapStyles = {
//     height: '400px',
//     width: '100%',
//     margin: '0 auto',
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to the Google Maps App</h1>
//       </header>
//       <LoadScript googleMapsApiKey="AIzaSyDVivV1MQgNGv2YPpJg5OaMMD_i-28U5mc">
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           center={{ lat: 37.7749, lng: -122.4194 }} // Set the center coordinates
//           zoom={10} // Set the initial zoom level
//         />
//       </LoadScript>
//     </div>
//   );
// }

function App() {
  const mapStyles = {
    height: '400px',
    width: '100%',
    margin: '0 auto',
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Google Maps App</h1>
      </header>
      <div style={mapStyles}>
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyDVivV1MQgNGv2YPpJg5OaMMD_i-28U5mc' }}
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
          defaultZoom={10}
        />
      </div>
    </div>
  );
}


export default App;
