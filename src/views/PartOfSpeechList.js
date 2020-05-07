import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem,  Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Link } from "react-router-dom";

export default function PartOfSpeechList () {

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
                <h1 className="text-black">찾을 단어가 있는 품사를 고르시오</h1>
              </div>
            </Container>
            <Container>
              <InputGroup>
                  <Input />
                  <InputGroupAddon addonType="append"><Button>검색</Button></InputGroupAddon>
              </InputGroup>
            </Container>
            <Container className="pb-1 pt-1 text-center">
              <Button color="secondary" type="button">말하기</Button>
            </Container>
          </div>
          <Container>
            <h3 className="bg-white">단어를 누르면 단어가 추가되어 문장이 됩니다.</h3>
          </Container>
          <div className="body bg-youtube pb-1">
            <Container>
              <div className="body bg-youtube pb-1">
                <ListGroup>
                  <ListGroupItem tag="a" href="/ChooseNoun" action>명사</ListGroupItem>
                  <ListGroupItem tag="a" href="/ChooseVerb" action>동사</ListGroupItem>
                  <ListGroupItem tag="a" href="/ChooseQuantity" action>수량</ListGroupItem>
                  <ListGroupItem tag="a" href="/ChooseAdverb" action>요구용 부사</ListGroupItem>
                  <ListGroupItem tag="a" href="/ChooseInterro" action>의문사</ListGroupItem>
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
              <Link to="/select_Location">
                <Button color="secondary" type="button">뒤로가기</Button>
              </Link>
            </Row>
          </Container>
      </div>
    </>
  );
}
