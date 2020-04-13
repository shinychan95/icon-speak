import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";

import Map from './Map'


class App extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-white");
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    let map = new window.kakao.maps.Map(container, options);
  }

  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }

  render() {
    return (
      <>
        <div className="main-content">
            <div className="header bg-white pb-9 py-5 py-lg-6">
              <Container className="pb-1 text-center">
                <div className="header-body text-center">
								  <h1 className="text-black">Icon Speak</h1>
                </div>
              </Container>
            </div>
			
						<Container className="pb-1 text-center">
              <Col className="justify-content-center">
                <div id="map" style={{margin: "auto", width: "500px", height: "400px" }} />
                <Button className="my-1" color="primary" type="button" onClick={this.handleFormSubmit}>
                  장소 탐색
                </Button>
              </Col>
            </Container>           
        </div>
      </>
    );
  }
}


export default App;
