import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import One from "../assets/locationSpeak/04_베이커리JPEG/갯수/1.jpg"
import Two from "../assets/locationSpeak/04_베이커리JPEG/갯수/2.jpg"
import Three from "../assets/locationSpeak/04_베이커리JPEG/갯수/3.jpg"
import Four from "../assets/locationSpeak/04_베이커리JPEG/갯수/4.jpg"
import Many from "../assets/locationSpeak/04_베이커리JPEG/갯수/많이.jpg"
import None from "../assets/locationSpeak/04_베이커리JPEG/갯수/없다.jpg"
import Have from "../assets/locationSpeak/04_베이커리JPEG/갯수/있다.jpg"
import Some from "../assets/locationSpeak/04_베이커리JPEG/갯수/조금.jpg"

export default function SelectQuant () {

  useEffect( () => {
    document.body.classList.add("bg-youtube");
    return () => {
      document.body.classList.remove("bg-youtube");
    }
  }, []);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  return (
    <>
      <div className="main-content">
          <div className="header bg-youtube pb-1 py-3 py-lg-6">
            <Container>
              <div className="header-body text-center">
                <h1 className="text-black">찾을 단어를 고르시오</h1>
              </div>
            </Container>
            <Container>
                <InputGroup>
                    <Input />
                    <InputGroupAddon addonType="append"><Button>검색</Button></InputGroupAddon>
                </InputGroup>
            </Container>
          </div>
          <Container>
            <h3 className="bg-white">단어를 누르면 단어가 추가되어 문장이 됩니다.</h3>
          </Container>
          <div className="body bg-youtube pb-1">
            <Container>
              <div className="body bg-youtube pb-1">
                <ListGroup>
                  <ListGroupItem tag="a" href="/choose1" action>
                    <Row>
                      <Container className="py-1">
                        <img src={One} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>1개</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Two} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>2개</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Three} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>3개</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                     
                    <Row>
                      <Container className="py-1">
                        <img src={Four} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>4개</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Many} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>많이</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={None} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>없다</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Have} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>있다</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Some} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>조금</h4>                      
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Container>
          </div>
          <Container>
            <Row>
              <Button color="secondary" onClick={toggle}>검색 단어 추가 문의</Button>
              <Modal isOpen={modal} toggle={toggle} className="">
                <ModalHeader toggle={toggle}>검색 단어 추가 문의</ModalHeader>
                <ModalBody>
                  <Input>추가 검색 요청할 단어를 넣으시오</Input>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>닫기</Button>
                  <Button color="primary" onClick={toggle}>요청하기</Button>
                </ModalFooter>
              </Modal>
              <Link to="/choose1">
                <Button color="secondary" type="button">뒤로가기</Button>                
              </Link>
            </Row>
          </Container>
      </div>
    </>
  );
}
