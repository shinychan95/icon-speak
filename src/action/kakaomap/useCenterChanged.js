import { useSelector } from "react-redux";
import useLocationData from "../useLocationData";
import useSetMarker from "./useSetMarker";

const { kakao } = window;

var kakaoMap = null;

const useCenterChanged = () => {
  const { map } = useSelector(state => ({
    map: state.searchMap.map
  }));

  const { getLocationDataGeo } = useLocationData();

  const { setMarker } = useSetMarker();

  kakaoMap = map;

  const setEvent = () => {
    if (kakaoMap !== null) {
      kakao.maps.event.addListener(kakaoMap, 'dragend', () => {

        // 지도의 중심좌표를 얻어옵니다 
        var latlng = kakaoMap.getCenter();

        getLocationDataGeo(latlng.getLat(), latlng.getLng(), 3000);

        setMarker();

      });
    }
  };

  return { setEvent };

}

export default useCenterChanged;