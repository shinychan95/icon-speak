import React, { useEffect } from 'react';
import { Col } from "reactstrap";


class Map extends React.Component {
  componentDidMount() {
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    let map = new window.kakao.maps.Map(container, options);

  }

  render() {
    return (
			<div id="map" style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}} />
    );
  }
}


export default Map;
