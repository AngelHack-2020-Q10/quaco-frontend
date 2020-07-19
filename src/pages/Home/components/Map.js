import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
