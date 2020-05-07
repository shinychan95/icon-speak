import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import Go from "../assets/locationSpeak/04_베이커리JPEG/동사/가다.png"
import Help from "../assets/locationSpeak/04_베이커리JPEG/동사/도와주세요.png"
import Drink from "../assets/locationSpeak/04_베이커리JPEG/동사/마시다.jpg"
import Delicious from "../assets/locationSpeak/04_베이커리JPEG/동사/맛있다.jpg"
import Eat from "../assets/locationSpeak/04_베이커리JPEG/동사/먹다.png"
import Hate from "../assets/locationSpeak/04_베이커리JPEG/동사/싫어요.png"
import Come from "../assets/locationSpeak/04_베이커리JPEG/동사/오다.png"
import Like from "../assets/locationSpeak/04_베이커리JPEG/동사/좋아요.png"
import Order from "../assets/locationSpeak/04_베이커리JPEG/동사/주문하다.jpg"
import Give from "../assets/locationSpeak/04_베이커리JPEG/동사/주세요.png"

export default function SelectVerb () {

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
                        <img src={Go} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>가다</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Help} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>도와주세요</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Drink} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>마시다</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                     
                    <Row>
                      <Container className="py-1">
                        <img src={Delicious} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>맛있다</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Eat} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>먹다</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Hate} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>싫어요</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Come} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>오다</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Like} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>좋아요</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Order} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>주문하다</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Give} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>주세요</h4>                      
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
