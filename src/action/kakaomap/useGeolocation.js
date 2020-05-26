import { useSelector } from "react-redux";
import useLocationData from "../useLocationData";
import useSetMarker from "./useSetMarker";
const { kakao } = window

var kakaoMap = {};

const useGeolocation = () => {

  const { map } = useSelector(state => ({ map: state.searchMap.map }), []);

  const { getLocationDataGeo } = useLocationData();
  const { setMarker } = useSetMarker();

  kakaoMap = map;


  const getGeo = () => {
    if (navigator.geolocation) {
      if (kakaoMap !== null) {
        // 성공하면 position
        navigator.geolocation.getCurrentPosition(position => {

          

          // 현재 좌표를 얻으면, 데이터 요청해서 마커 표시
          getLocationDataGeo(position.coords.latitude, position.coords.longitude, 3000).then(() => {
            setMarker();
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