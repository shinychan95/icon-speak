import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import MainImage from "./img/icon.png"

export default function Main () {

  useEffect( () => {
    document.body.classList.add("bg-orange");
    return () => {
      document.body.classList.remove("bg-default");
    }
  }, []);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  
  return (
    <>
      <div className="main-content">
          <div className="header bg-orange pb-5 py-5 py-lg-6">
            <Container>
              <div className="header-body text-center">
                <h1 className="text-black">Icon Speak</h1>
              </div>
            </Container>
          </div>
          <Container className="py-1 pb-4 text-center">
            <Col className="justify-content-center">
              <img src={MainImage} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>              
            </Col>
          </Container>
          <Container className="pb-1 text-center">
            <Col className="justify-content-center">
              <Link to="/select_place">
                <Button className="my-1" color="primary" type="button">
                  시작하기
                </Button>
              </Link>
            </Col>
          </Container>
          <Container className="pb-1 text-center">
            <Col className="justify-content-center">
            <Button color="danger" onClick={toggle}>도움말</Button>
            <Modal isOpen={modal} toggle={toggle} className="">
              <ModalHeader toggle={toggle}>사용법</ModalHeader>
              <ModalBody>
                설명추가
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>닫기</Button>
              </ModalFooter>
            </Modal>
            </Col>
          </Container>           
          {/* <Container className="pb-1 text-center">
            <Row>
              <Col>
              
              </Col>
              <Col className="justify-content-center">
                  <Button className="my-1" color="danger" type="button" block>
                    사용법
                  </Button>
              </Col>
              <Col>
              
              </Col>
            </Row>
          </Container>  */}
      </div>
    </>
  );
}
