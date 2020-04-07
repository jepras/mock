import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class SecondMapStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      center: {
        lat: 48.8583701,
        lng: 2.2922926
      },
      zoom: 18
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.fetchApi();
  }

  getMapOptions = maps => {
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

  fetchApi() {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.value}&key=AIzaSyB8vzZ5vZR9M3jvHpViVL2KLDKE64ezOHE `
    )
      .then(res => res.json())
      .then(data => {
        /* for each way */
        data.results.forEach(item =>
          console.log("geometry.location: ", item.geometry.location)
        );

        /* new location */
        console.log("data location", data.results[0].geometry.location);
        const newLocation = data.results[0].geometry.location;

        /* set state (not necessary now) */
        this.setState({ center: newLocation });
      });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB8vzZ5vZR9M3jvHpViVL2KLDKE64ezOHE" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          options={this.getMapOptions}
        >
          <div className="button-placement step-one">
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SecondMapStep;
