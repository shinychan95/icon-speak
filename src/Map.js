import React, { useEffect } from 'react';


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
			<div>
				<div id="map" style={{ width: "500px", height: "400px" }} />
			</div>
    );
  }
}


export default Map;
