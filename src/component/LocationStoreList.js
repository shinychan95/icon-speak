import React from "react";
import { Collapse, Card, Tag } from "antd";
import { useSelector } from "react-redux";

const { Panel } = Collapse;
const { kakao } = window;

var kakaoMap = null;
var stores = [];

const LocationStoreList = (props) => {

  const { storeList, map } = useSelector(state => ({
    storeList: state.searchMap.storeList,
    map: state.searchMap.map
  }));

  kakaoMap = map;
  stores = storeList;

  const onclickHandle = (lat, lng) => {
    kakaoMap.setLevel(4);
    kakaoMap.panTo(new kakao.maps.LatLng(lat, lng));
  };

  const scrollUpDelay = 1;
  const scrollUpSpeed = 60;

  const scrollUp = () => {
    console.log("scrollUp");
    if (document.documentElement.scrollTop < 1) {
      return;
    }
    document.documentElement.scrollTop = document.documentElement.scrollTop - scrollUpSpeed;
    setTimeout(() => {
      scrollUp();
    }, scrollUpDelay);
  }
  
  console.log("storeList: ", storeList)
  console.log("propsa : ", props)

  return (
    <div className="more_Info">
      <Collapse style={{ maxWidth: 500, margin: "auto", marginBottom: 5, marginTop: 5 }}>
        
        <Panel header={`지도 기준 ${props.place} 리스트`} key="searchMap">
          {storeList.map((value, index) => (
            <div key={value.code}>
              <Card hoverable onClick={() => {
                onclickHandle(value.y, value.x);
                scrollUp();
              }} style={{ maxWidth: 500, margin: "auto", marginBottom: 5 }}
                title={value.place_name} >
                <div style={{ textAlign: "left" }}>
                  <a href={"https://map.kakao.com/link/map/" + value.place_name + "," + value.y + "," + value.x} target="_blank">
                    <p>주소 : {value.address_name}</p>
                  </a>
                  <p>거리 : {value.distance}</p>
                </div>
              </Card>
            </div>
          ))}
        </Panel>
      </Collapse>
    </div>
  );

}

export default LocationStoreList;