import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class FifthStep extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  getMapOptions = (maps: Maps) => {
    return {
      streetViewControl: false,
      scaleControl: true,
      fullscreenControl: false,
      styles: [
        {
          featureType: "poi.business",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        }
      ],
      gestureHandling: "greedy",
      disableDoubleClickZoom: true,
      minZoom: 11,
      maxZoom: 18,

      mapTypeControl: true,
      mapTypeId: maps.MapTypeId.SATELLITE,
      mapTypeControlOptions: {
        style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: maps.ControlPosition.BOTTOM_CENTER,
        mapTypeIds: [
          maps.MapTypeId.ROADMAP,
          maps.MapTypeId.SATELLITE,
          maps.MapTypeId.HYBRID
        ]
      },

      zoomControl: true,
      clickableIcons: false
    };
  };

  render() {
    const { handleNext } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB8vzZ5vZR9M3jvHpViVL2KLDKE64ezOHE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.getMapOptions}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
          <div className="button-placement step-one">
            <button className="button" color="primary" onClick={handleNext}>
              Next
            </button>
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default FifthStep;
