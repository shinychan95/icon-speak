import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import axios from 'axios'; // HTTP 클라이언트 라이브러리
import { Link } from "react-router-dom";
import Btn from "../component/Btn"
import Users from "../component/Users";

const { kakao } = window

class MapSearch extends React.Component {

  componentDidMount() {
    document.body.classList.add("bg-instagram");
    console.log(this.props)
    var keyword = this.props.match.params.place
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 4
    };

    let map = new window.kakao.maps.Map(container, options);

    let locPosition;

    // 마커를 담을 배열입니다
    var markers = [];

    var marker = new kakao.maps.Marker();
    
    marker.setMap(map);

    var iwContent = '<div style="padding:5px;">내 위치</div>' // 인포윈도우에 표시할 내용
    
    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content : iwContent
    });
  
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker); 

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
    if (navigator.geolocation) {
        
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function(position) {
          
          var lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도
          
          locPosition = new kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          map.setCenter(locPosition); 
          marker.setPosition(locPosition)
          
      });
              
    } 

   
    // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'center_changed', function() {
      
      // 지도의 중심좌표를 얻어옵니다 
      locPosition = map.getCenter(); 

      marker.setPosition(locPosition)

      // 인포윈도우를 마커위에 표시합니다 
      infowindow.open(map, marker);
      
    });

    
    
  }

  // getSearchResult() {
  //   axios.post(`https://dapi.kakao.com/v2/local/search/keyword.json?query={s}`, {
  //     headers: {
  //       'Authorization': 'KakaoAK 2dde8f0dbf6d40840e4a727cd92aab7a'
  //     },
  //     params: {
  //       x: locPosition.getLng(),
  //       y: locPosition.getLat(),
  //       radius: 1000,
  //       query: keyword
  //     }
  //   })
  //     .then(res => {
  //       console.log(res)
  //   })
  //   .catch(e => {
  //     console.log("error", e)
  //     console.log("chanyoung")
  //   })
  // }

  handleClick() {
    console.log("chan")
    this.getResult()
  }

  render() {
    return (
      <>
        <div className="main-content">
            <div className="header bg-instagram pb-1 py-3 py-lg-6">
              <Container className="pb-1 text-center">
                <div className="header-body text-center">
								  <h1 className="my-4 text-black">Icon Speak</h1>
                </div>
              </Container>
            </div>
            <div className="body bg-instagram pb-9">
              <Container className="pb-1 text-center">
                <Col className="justify-content-center">
                  <div id="map" style={{margin: "auto", maxWidth: "100%", height: "400px"}} />
                  <Link to="/SelectLocation">
                    <Button className="my-1 mt-4" color="primary" type="button">
                      장소 탐색
                    </Button>                  
                  </Link>
                </Col>
                <Col>
                  <Users></Users>
                </Col>
                <Col>
                  <Btn></Btn>
                </Col>
                <Col>
                  <Link to="/SelectPlace">
                    <Button color="secondary" type="button">뒤로가기</Button>
                  </Link>
                </Col>
              </Container>                 
            </div>
        </div>
      </>
    );
  }
}


export default MapSearch;
