import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import Map from './Map'


class App extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-default");
  }

  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }

  render() {
    return (
      <>
        <div className="main-content">
          <div className="header py-5 py-lg-6">
            <Container>
              <div className="header-body text-center">
                <Row className="justify-content-center">
                  <Col lg="5" md="6">
                    <h1 className="text-white">Welcome!</h1>
                    <p className="text-lead text-light">
                      We can help you to speak with icon
                    </p>
                    <Button className="my-4" color="primary" type="button" onClick={this.handleFormSubmit}>
                      버튼
                    </Button>
                  </Col>
                </Row>
              </div>
            </Container>

          </div>
          {/* Page content */}
          <Container className="pb-6">
            <Row className="justify-content-center">
              <Map/>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}


export default App;
