import { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/store";

const useLocationData = () => {
  const dispatch = useDispatch();

  const [locationData, setLocationData] = useState(
    {
      meta: {
        is_end: false,
        pageable_count: 0,
        same_name: {
          keyword: "",
          region: [],
          selected_region: ""
        },
        total_count: 0,
      },
      documents: [
        {
          address_name: "",
          category_group_code: "",
          category_name: "",
          distance: 0,
          id: 0,
          phone: "",
          place_name: "",
          place_url: "",
          road_address_name: "",
          x: 0, // lng
          y: 0, // lat 
        }
      ]
    }
  );


  const getLocationDataGeo = async (lat, lng, radius, location) => {
    console.log("lat: ", lat, " lng: ", lng, " radius: ", radius);
    const Kakao = Axios.create({
      headers: {
        Authorization: "KakaoAK 2dde8f0dbf6d40840e4a727cd92aab7a",
      }
    });
    await Kakao.get(
      `https://dapi.kakao.com/v2/local/search/keyword.json?y=${lat}&x=${lng}&radius=${radius}&query=${location}`)
      .then(response => {
        const { documents, meta } = response.data
        console.log(response);

        dispatch(actionCreators.setStoreList(documents));
        console.log(documents.length);
      }).catch(error => {
        console.log(error);
      });
  };

  return { ...locationData, getLocationDataGeo };
}

export default useLocationData;