import Axios from "axios";
import { useSelector } from "react-redux";

import useMaskData from "./useMaskData";
import useSetMarker from "./kakaomap/useSetMarker";

const { kakao } = window;

var kakaoMap = null;

const useIpAddr = () => {

  const { map } = useSelector(state => ({ map: state.searchMap.map }), []);

  kakaoMap = map;

  const { getMaskDataGeo } = useMaskData();
  const { setMarker } = useSetMarker();


  const getIpAddr = async () => {
    await Axios.get("https://ipapi.co/json")
      .then((response) => {
        if (kakaoMap !== null) {
          getMaskDataGeo(response.data.latitude, response.data.longitude, 3000).then(() => {
            setMarker();
          });
          kakaoMap.panTo(new kakao.maps.LatLng(response.data.latitude, response.data.longitude));
       
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return { getIpAddr };
};
export default useIpAddr;
