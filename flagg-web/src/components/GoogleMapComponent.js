import React from "react";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@material-ui/icons/Room";

const AnyReactComponent = ({ marker }) => <div>{marker}</div>;

class GoogleMapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      latValue: "",
      longValue: "",
      flagColor: ""
    };
  }

  static defaultProps = {
    center: {
      lat: 43.2141,
      lng: 27.9147,
    },
    zoom: 16,
  };

  handleLatituteState = (lat, lng) => {
    this.setState({ latValue: lat });
    this.setState({ longValue: lng });

    this.props.latFunc(lat);
    this.props.lngFunc(lng);
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAm7jbvEP32s0PYWmi76wwpphF6j64iS14",
          language: "bg",
          region: "bg",
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onClick={(e) => {
          this.handleLatituteState(e.lat, e.lng);
        }}
      >
        <AnyReactComponent
          lat={this.state.latValue}
          lng={this.state.longValue}
          marker={
            <RoomIcon
              style={{ color: this.props.flagCol, width: "60px", height: "100px" }}
            />
          }
        />
      </GoogleMapReact>
    );
  }
}

export default GoogleMapComponent;
