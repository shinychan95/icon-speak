import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Map from './Map'


class App extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-white");
  }

  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }

  render() {
    return (
      <>
        <div className="main-content">
            <div className="header bg-white pb-9 py-5 py-lg-6">
              <Container>
                <div className="header-body text-center">
								<h1 className="text-black">Icon Speak</h1>
                      

                   </div>
              </Container>
            </div>
						<Container className="py-9">

						</Container>
						<Container className="pb-1 text-center">
            	<Col className="justify-content-center">
                <Link to="/map_search">
									<Button className="my-1" color="primary" type="button" onClick={this.handleFormSubmit}>
										시작하기
									</Button>
                </Link>
							</Col>
            </Container>
						<Container className="pb-1 text-center">
            	<Col className="justify-content-center">
									<Button className="my-1" color="primary" type="button" onClick={this.handleFormSubmit}>
										사용법
									</Button>
							</Col>
            </Container>           
                          
													
                 
        </div>
      </>
    );
  }
}


export default App;
