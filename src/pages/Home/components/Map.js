import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "@emotion/styled";
import { ReactComponent as PinIcon } from "assets/icons/map-pin-green.svg";

// const AnyReactComponent = ({ text }) => <Marker>{text}</Marker>;
const AnyReactComponent = ({ text }) => (
  <div>
    <PinIcon />
    <MarkerArea />
  </div>
);

const MarkerArea = styled.div`
  width: 250px;
  height: 250px;
  background-color: #00d06c7a;
  border-radius: 50%;
  position: absolute;
  top: -120px;
  left: -110px;
`;

export default class SimpleMap extends Component {
  render() {
    console.log(this.props.lat, this.props.lng);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDrx5BO-OfUWYDuqmhqFlXCKgMpaRLpbYI" }}
          defaultCenter={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
