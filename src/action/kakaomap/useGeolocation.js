import { useSelector } from "react-redux";
import useLocationData from "../useLocationData";
import useSetMarker from "./useSetMarker";
const { kakao } = window

var kakaoMap = {};

const useGeolocation = (location) => {
  // 전역 번수로서 저장된 map을 가져온다.
  const { map } = useSelector(state => ({ map: state.searchMap.map }), []);

  const { getLocationDataGeo } = useLocationData();
  const { setMarker } = useSetMarker();

  kakaoMap = map;


  const getGeo = (location) => {
    // navigator는 내장된 기능이고, navigator.geolocation가 활성화되있으면 postion값을 얻고, 아니면 오류메세지를 띄운다.
    if (navigator.geolocation) {
      // 전역변수 kakaoMap에 카카오맵 지도가 있는지 확인한다.
      if (kakaoMap != null) {

        // 현재 좌표의 값을 position 값에 저장한다.
        navigator.geolocation.getCurrentPosition(position => {

          

          // 현재 좌표를 얻으면, 데이터 요청해서 마커 표시
          getLocationDataGeo(position.coords.latitude, position.coords.longitude, 3000, location).then(() => {
            setMarker(location);
          })
          // 중심 좌표를 지정한 좌표 또는 영역으로 부드럽게 이동한다. 
          kakaoMap.panTo(new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude));
        });
      }
    } else {
      alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.")
    }
  }
  return { getGeo };
}


export default useGeolocation;