// import React from "react";
// import GoogleMapReact from "google-map-react";
// import "./UserMap.css";
// import { Icon } from "@iconify/react";
// import locationIcon from "@iconify/icons-mdi/map-marker";

// const LocationPin = ({ text }) => (
//   <div className="pin">
//     <Icon icon={locationIcon} className="pin-icon" />
//     <p className="pin-text">{text}</p>
//   </div>
// );

// const UserMap = ({ location, zoomLevel, apiKey }) => {
//   const localEvents = {
//     name: "Food Drive!",

//     center: {
//       lat: 35.91179932620801,
//       lng: -79.07207156880331,
//     },
//     zoom: 11,
//   };

//   return (
//     <div className="map">
//       <h2 className="map-h2">Upcoming Events Near Me!</h2>

//       <div className="google-map">
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: apiKey }}
//           defaultCenter={localEvents.center}
//           defaultZoom={localEvents.zoom}
//         >
//           <LocationPin
//             lat={localEvents.lat}
//             lng={localEvents.lng}
//             text={localEvents.name}
//           />
//         </GoogleMapReact>
//       </div>
//     </div>
//   );
// };

// export default UserMap;
