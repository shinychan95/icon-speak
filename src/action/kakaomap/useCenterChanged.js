import { useSelector } from "react-redux";
import useLocationData from "../useLocationData";
import useSetMarker from "./useSetMarker";

const { kakao } = window;

var kakaoMap = null;

const useCenterChanged = () => {
  const { map } = useSelector(state => ({
    map: state.searchMap.map
  }));

  //useLocationData 모듈에서 getLocationDataGeo 함수를 갖고온다.
  const { getLocationDataGeo } = useLocationData();

  const { setMarker } = useSetMarker();

  kakaoMap = map;



  const setEvent = (location) => {
    if (kakaoMap != null) {
      //사용자가 지도에서 위치를 바꿀 때 발생하는 이벤트를 처리하는 함수
      kakao.maps.event.addListener(kakaoMap, 'dragend', () => {


        // 지도의 중심좌표를 얻어옵니다 
        var latlng = kakaoMap.getCenter();

        getLocationDataGeo(latlng.getLat(), latlng.getLng(), 3000, location);

        setMarker();

      });
    }
  };

  return { setEvent };

}

export default useCenterChanged;