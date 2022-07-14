import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

// import "./styles.css";

const MyMapComponent = withScriptjs(
    withGoogleMap(props => {
        return (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: props.address.lat, lng: props.address.lng }}
            >
                <Marker position={{ lat: props.address.lat, lng: props.address.lng }} />
            </GoogleMap>
        );
    })
);

const App = ({address}) => {
    console.log('address App', address);
    const lon = parseInt(address.lon);
    console.log('lon2222', typeof lon);
    return (
        <div className="">
            <MyMapComponent
                // address={{ lat: 30.78650859999999, lng: 31.0003757 }}
                address={{ lat: parseInt(address.lat), lng: parseInt(address.lon) }}
                // address={{ lat: 30.78650859999999, lng: 31.0003757 }}
                // address={{ lat: parseInt('30.78650859999999'), lng: parseInt('31.0003757') }}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQDC3VV5CGRaueUYpEEJ308KNx8zbG5t0&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `60vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}

export default App



























// import React from "react";
// import { compose, withProps } from "recompose";
// import {
//     withScriptjs,
//     withGoogleMap,
//     Polyline,
//     GoogleMap,
//     Marker
// } from "react-google-maps";

// const MyMapComponent = compose(
//     withProps({
//         /**
//          * Note: create and replace your own key in the Google console.
//          * https://console.developers.google.com/apis/dashboard
//          * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
//          */
//         googleMapURL:
//             "https://maps.googleapis.com/maps/api/js?key=AIzaSyDQDC3VV5CGRaueUYpEEJ308KNx8zbG5t0&v=3.exp&libraries=geometry,drawing,places",
//         loadingElement: <div style={{ height: `100%` }} />,
//         containerElement: <div style={{ height: `400px`, 'minHeight': '60vh' }} />,
//         mapElement: <div style={{ height: `100%` }} />
//     }),
//     withScriptjs,
//     withGoogleMap
// )(props => (    
//     // <GoogleMap defaultZoom={16} defaultCenter={{ lat: props.address.lat, lng: props.address.lon }}>
//     <GoogleMap defaultZoom={16} defaultCenter={{ lat: 30.78650859999999, lng: 31.0003757 }} > 
        
//         {props.isMarkerShown && (
//             <Marker position={{ lat: 30.78650859999999, lng: 31.0003757 }} />
//         )}
//         <Marker position={{ lat: 30.78650859999999, lng: 31.0003757 }} />
//         <Polyline
//             path={[
//                 // { lat: 30.78650859999999, lng: 31.0003757 },
//                 // { lat: 30.78650859999992, lng: 31.0003752 },
//                 // { lat: 18.558908, lng: -68.389916 },
//                 // { lat: 18.558853, lng: -68.389922 },
//                 // { lat: 18.558375, lng: -68.389729 },
//                 // { lat: 18.558032, lng: -68.389182 },
//                 // { lat: 18.55805, lng: -68.388613 },
//                 // { lat: 18.558256, lng: -68.388213 },
//                 // { lat: 18.558744, lng: -68.387929 }
//             ]}
//             options={{ strokeColor: "#FF0000 " }}
//         />
        
//     </GoogleMap>
// ));

// export default MyMapComponent