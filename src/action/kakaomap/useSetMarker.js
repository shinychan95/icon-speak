import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../../store/store";

const { kakao } = window;

var stores = [];
var kakaoMap = {};
var marker_old = [];
var overlay_old = [];

const useSetMarker = (location) => {

  const { map, storeList, oldMarker, oldOverlay } = useSelector(state => ({
    map: state.searchMap.map,
    storeList: state.searchMap.storeList,
    oldMarker: state.searchMap.oldMarker,
    oldOverlay: state.searchMap.oldOverlay
  }));
  const dispatcher = useDispatch();



  stores = storeList;
  kakaoMap = map;
  marker_old = oldMarker;
  overlay_old = oldOverlay;



  const setMarker = (location) => {

    // Marker 초기화
    marker_old.map(value => {
      value.setMap(null);
    });
    // overlay 초기화
    overlay_old.map(value => {
      value.setMap(null);
    });

    console.log("장소: ", location)
    var marker_new = [];
    var overlay_new = [];


    // Marker 설정
    stores.map(value => {
      
      var imageSrc = "https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg"
      var remain_stat = "100개 이상"
      var remain_color = "#87d068"

      const content =
        `<div style="margin-bottom: 40px; width: 300px; background-color: white">` +
        `  <div class="ant-card ant-card-bordered ant-card-hoverable" style="font-size: 12px; border-radius: 5px;">` +
        `    <div class="ant-card-head" style="padding: 10px;">` +
        `      <div class="ant-card-head-wrapper" >` +
        `        <div class="ant-card-head-title" style="font-size: 13px; padding: 0px;">` +
        `          ${value.place_name}` +
        `        </div>` +
        `      </div>` +
        `    </div>` +
        `    <div class="ant-card-body" style="text-align: left; padding: 10px;">` +
        `      <p style="width:290px; white-space:normal; ">주소: ${value.address_name}</p>` +
        `      <p style="width:290px; white-space:normal; ">거리: ${value.distance}</p>` +     
        `      <p style="width:290px; white-space:normal; ">전화번호: ${value.phone}</p>` +
        `      <a href="https://map.kakao.com/?urlX=${value.lat}&urlY=${value.lng}&name=${value.place_name}" target="_blank">` +
        `       <p style="width:290px; text-align:center; ">장소 찾아가기(카카오맵으로 이동)</p>` +
        `      </a>` +
        `      <a href="/MakeSpeech/${location}">` +
        `       <p style="width:290px; text-align:center; ">문장 만들어 말하기</p>` +
        `      </a>` +
        `   </div>` +
        `  </div>` +
        `</div>`


      // 커스텀 오버레이를 생성합니다
      var customOverlay = new kakao.maps.CustomOverlay({
        map: null,
        position: new kakao.maps.LatLng(value.y, value.x),
        content: content,
        yAnchor: 1
      });

      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(30, 35);
      // 마커 이미지를 생성합니다    
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: kakaoMap, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(value.y, value.x), // 마커를 표시할 위치
        title: value.place_name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage // 마커 이미지 
      });

      // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        console.log("Click Event: ", kakaoMap.getLevel())

        kakaoMap.panTo(new kakao.maps.LatLng(value.y, value.x));
        customOverlay.setMap(kakaoMap);
      });

      // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
      marker_new.push(marker);

      overlay_new.push(customOverlay)
    });

    dispatcher(actionCreators.addMarker(marker_new, overlay_new));
    console.log(marker_new, overlay_new);

  };
  return { setMarker };
}

export default useSetMarker;