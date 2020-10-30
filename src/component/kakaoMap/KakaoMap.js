import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../store/store";

const { kakao } = window;

const KakaoMap = () => {
  // 카카오맵을 전역 변수로서 저장하기 위해 사용하는 함수
  const dispatcher = useDispatch();

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 4
    };
    // 카카오 맵 지도를 선언한다.
    const map = new kakao.maps.Map(container, options);
    
    // 전역변수 map 값에 위에서 선언한 map 값을 저장한다.
    dispatcher(actionCreators.setMap(map), [map]);
  }, [])

  return <div id="map" style={{ height: "100%" }}></div>
}

export default KakaoMap;