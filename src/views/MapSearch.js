import React, { useEffect } from "react";
import KaKaoMap from "../component/kakaoMap/KakaoMap";
import useGeolocation from "../action/kakaomap/useGeolocation";
import useCenterChanged from "../action/kakaomap/useCenterChanged";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import { useSelector } from "react-redux";


const MapSearch = () => {
  const { map } = useSelector(state => ({ map: state.searchMap.map }), []);
  const { getGeo } = useGeolocation();
  const { setEvent } = useCenterChanged();

  // Log를 살펴보면, map이 없다가 생기는 것을 볼 수 있는데,
  // state에 Map이 업데이트가 되면 아래 두 함수가 실행되는 것
  if (map) {console.log("Map is in")} else {console.log("Map is not in")}

  // 특정값들이 리렌더링 시에 변경되지 않는다면 리액트로 하여금 effect를 건너뛰도록 하는 것
  // 즉, map이 업데이트 될 때 effect를 재실행.
  useEffect(() => {
    getGeo();
    setEvent();
  }, [map]);
  
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
              <div style={{ height: "50vh", paddingLeft: "10px", paddingRight: "10px" }}>
                <KaKaoMap >
                </KaKaoMap>
              </div>
                <Link to="/select_Location">
                  <Button className="my-1 mt-4" color="primary" type="button">
                    장소 탐색
                  </Button>                  
                </Link>
              </Col>
            </Container>                 
          </div>
      </div>
    </>
  )
}

export default MapSearch;