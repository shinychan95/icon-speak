import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../store/store";

const { kakao } = window;

const KakaoMap = () => {

  const dispatcher = useDispatch();

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 4
    };
    const map = new kakao.maps.Map(container, options);
    
    // 디스패치는 스토어의 내장함수 중 하나로, 액션을 발생시키는 것이라고 이해하면 된다.
    dispatcher(actionCreators.setMap(map), [map]);
  }, [])

  return <div id="map" style={{ height: "100%" }}></div>
}

export default KakaoMap;