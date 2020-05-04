import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import axios from 'axios'; // HTTP 클라이언트 라이브러리
import { Link } from "react-router-dom";
import Btn from "../component/Btn"
import Users from "../component/Users";

class MapSearch extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-instagram");
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    let map = new window.kakao.maps.Map(container, options);
  }

  getResult() {

    let headers = {
        'Authorization': 'KakaoAK 2dde8f0dbf6d40840e4a727cd92aab7a'
    }

    const reqObj = {
      x: 129.337100,
      y: 36.021397,
      radius: 1000,
      query: "빵집"

    };
    return axios.post("https://dapi.kakao.com/v2/local/search/keyword.json?query=빵", {
      headers: {
        'Authorization': 'KakaoAK 2dde8f0dbf6d40840e4a727cd92aab7a'
      }
    })
      .then(res => {
        console.log(res)
    })
    .catch(e => {
      console.log("error", e)
      console.log("chanyoung")
    })
  }

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
								  <h1 className="text-black">Icon Speak</h1>
                </div>
              </Container>
            </div>
            <div className="body bg-instagram pb-9">
              <Container className="pb-1 text-center">
                <Col className="justify-content-center">
                  <div id="map" style={{margin: "auto", maxWidth: "100%", height: "400px"}} />
                  <Link to="/select_Location">
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
              </Container>                 
            </div>
        </div>
      </>
    );
  }
}


export default MapSearch;
