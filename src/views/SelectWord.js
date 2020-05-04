import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import Bread from "../장소별 그림/04_베이커리JPEG/베이커리/식빵.jpg"
import Train from "../아이콘 그림/썸네일-jpeg/기차역-1.jpg"
import PlayGround from "../아이콘 그림/썸네일-jpeg/놀이터.jpg"
import Mart from "../아이콘 그림/썸네일-jpeg/마트.jpg"
import Salon from "../아이콘 그림/썸네일-jpeg/미용실.jpg"

export default function SelectWord () {

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
                  <ListGroupItem tag="a" href="/choose1" action>                    <Row>
                      <Container className="py-1">
                        <img src={Bread} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>식빵</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    <Row>
                      <Container className="py-1">
                        <img src={Bread} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>식빵</h4>                      
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>                    <Row>
                      <Container className="py-1">
                        <img src={Bread} style={{display: "block", maxWidth: "20%", maxHeight: "fill-available"}}/>                        
                      </Container>
                      <h4 className="bg-white margin:" style={{margin:"auto"}}>식빵</h4>                      
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Container>
          </div>
          <Container>
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
          </Container>
      </div>
    </>
  );
}
