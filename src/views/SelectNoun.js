import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import Bread from "../장소별 그림/04_베이커리JPEG/베이커리/식빵.jpg"
import Donut from "../장소별 그림/04_베이커리JPEG/베이커리/도너츠.jpg"
import Muffin from "../장소별 그림/04_베이커리JPEG/베이커리/머핀.jpg"
import Bagget from "../장소별 그림/04_베이커리JPEG/베이커리/바게트.jpg"
import Sandwich from "../장소별 그림/04_베이커리JPEG/베이커리/샌드위치.jpg"
import Rollcake from "../장소별 그림/04_베이커리JPEG/베이커리/롤케익.jpg"
import Casstera from "../장소별 그림/04_베이커리JPEG/베이커리/카스테라.jpg"
import Cake from "../장소별 그림/04_베이커리JPEG/베이커리/케익.jpg"
import Croassance from "../장소별 그림/04_베이커리JPEG/베이커리/크루와상.jpg"
import Bingsu from "../장소별 그림/04_베이커리JPEG/베이커리/팥빙수.jpg"
import Feistry from "../장소별 그림/04_베이커리JPEG/베이커리/페이스트리.jpg"
import Cola from "../장소별 그림/04_베이커리JPEG/베이커리/콜라.jpg"

export default function SelectNoun () {

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
                        <img src={Bread} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>식빵</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Donut} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>도너츠</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Muffin} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>머핀</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                     
                    <Row>
                      <Container className="py-1">
                        <img src={Bagget} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>바게트</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Sandwich} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>샌드위치</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Rollcake} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>롤케익</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Cake} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>케익</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Croassance} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>크루와상</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Bingsu} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>팥빙수</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Feistry} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>페이스트리</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    
                    <Row>
                      <Container className="py-1">
                        <img src={Cola} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>콜라</h4>                      
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
