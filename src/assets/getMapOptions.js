const getMapOptions = maps => {
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

export default getMapOptions;
