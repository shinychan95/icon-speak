import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem,  Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import { Collapse, Card, Tag } from "antd";
import nounList from "../component/nounList/nounList"
import verbList from "../component/verbList/verbList"

const { Panel } = Collapse;

var voices = [];


function setVoiceList() {
  voices = window.speechSynthesis.getVoices();
}


function speech(txt) {
  if(!window.speechSynthesis) {
  alert("음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요");
  return;
  }
  var lang = 'ko-KR';
  var utterThis = new SpeechSynthesisUtterance(txt);
  utterThis.onend = function (event) {
  console.log('end');
  };
  utterThis.onerror = function(event) {
  console.log('error', event);
  };
  var voiceFound = false;
  for(var i = 0; i < voices.length ; i++) {
  if(voices[i].lang.indexOf(lang) >= 0 || voices[i].lang.indexOf(lang.replace('-', '_')) >= 0) {
  utterThis.voice = voices[i];
  voiceFound = true;
  }
  }
  if(!voiceFound) {
  alert('voice not found');
  return;
  }
  utterThis.lang = lang;
  utterThis.pitch = 1;
  utterThis.rate = 1; //속도
  window.speechSynthesis.speak(utterThis);
}
  
  


export default function MakeSpeech () {

  useEffect( () => {
    document.body.classList.add("bg-youtube");
    setVoiceList();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = setVoiceList;
    }

    if(!window.speechSynthesis) {
      alert("음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요");
    }

    return () => {
      document.body.classList.remove("bg-youtube");
    }
  }, []);

  const [modal, setModal] = useState(false);
  const [sentence, setSentence] = useState("");

  const onChange = (e) => {
    setSentence(e.target.value)
    console.log(sentence)
  }

  const toggle = () => setModal(!modal);
  
  const makeSpeech = () => {
    speech(sentence);
  }


  return (
    <>
      <div className="main-content">
          <div className="header bg-youtube pb-1 py-3 py-lg-6">
            <Container>
              <div className="header-body text-center">
                <h1 className="text-black">카드를 클릭하거나 직접 적은 문장을 말해보세요</h1>
              </div>
            </Container>
          </div>
          <div className="body bg-youtube pb-1">
          
            <Container>
              <div className="mt-3 mb-3 bg-white text-center">
                <InputGroup>
                  <Input type="text" value={sentence} onChange={onChange}/>
                  <InputGroupAddon addonType="prepend"><Button color="secondary" onClick={makeSpeech}>말하기</Button></InputGroupAddon>
                </InputGroup>
              </div>
            </Container>
            <Container>
              <div className="bg-youtube text-center">
                <Collapse className="mt-2">
                  <Panel header={"명사"}>
                    {nounList.map((data, index) => (
                      <Button className="mt-1 ml-1" color="primary" type="button" onClick={() => {setSentence(sentence + data.name)}} style={{maxWidth: "30%", maxHeight: "30%"}}>
                        <Container>
                          <img src={data.img} style={{display: "block", maxWidth: "100%", maxHeight: "100%"}}/>                        
                        </Container>
                        {data.name}
                      </Button> 
                    ))}
                  </Panel>
                </Collapse>
                <Collapse className="mt-2">
                  <Panel header={"동사"}>
                    {verbList.map((data, index) => (
                      <Button className="mt-1 ml-1" color="primary" type="button" onClick={() => {setSentence(sentence + data.name)}} style={{maxWidth: "30%", maxHeight: "30%"}}>
                        <Container>
                          <img src={data.img} style={{display: "block", maxWidth: "100%", maxHeight: "100%"}}/>                        
                        </Container>
                        {data.name}
                      </Button> 
                    ))}
                  </Panel>
                </Collapse>
                <Collapse className="mt-2">
                  <Panel header={"형용사"}>

                  </Panel>
                </Collapse>
                <Collapse className="mt-2">
                  <Panel header={"부사"}>

                  </Panel>
                </Collapse>

  
              </div>
            </Container>
            <Container>
              <div className="bg-youtube pb-1 text-center">
                <Col className="mt-2 justify-content-center">
                  <Button color="info" onClick={toggle}>검색 단어 추가 문의</Button>
                </Col>
              </div>
            </Container>      
            <Container>
              <div className="bg-youtube mt-2 text-center">     
                <Col> 
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
                </Col>
              </div>
            </Container>
          </div>
          
      </div>
    </>
  );
}
