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