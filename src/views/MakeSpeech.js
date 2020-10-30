import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Axios from "axios";
import { Collapse } from "antd";
import BakeryNounList from "../component/nounList/Bakery"
import ParkNounList from "../component/nounList/Park"

import BakeryVerbList from "../component/verbList/Bakery"
import ParkVerbList from "../component/verbList/Park"

const { Panel } = Collapse;

var voices = [];


function setVoiceList() {
  // 크롬이 지원하는 언어들을 가져와 저장
  voices = window.speechSynthesis.getVoices();
}

// 텍스트를 입력받아 음성으로 바꿔주는 함수
function speech(txt) {
  if (!window.speechSynthesis) {
    alert("음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요");
    return;
  }
  var lang = 'ko-KR';
  // 텍스트로 음성을 만들어 변수에 저장
  var utterThis = new SpeechSynthesisUtterance(txt); 
  // 음성으로 완료되었을 때의 이벤트
  utterThis.onend = function (event) {
    console.log('end');
  };
  // 음성 변환하다가 오류났을 때의 이벤트
  utterThis.onerror = function (event) {
    console.log('error', event);
  };
  var voiceFound = false;
  // 언어를 음성 변환 변수에 저장
  for (var i = 0; i < voices.length; i++) {
    if (voices[i].lang.indexOf(lang) >= 0 || voices[i].lang.indexOf(lang.replace('-', '_')) >= 0) {
      utterThis.voice = voices[i];
      voiceFound = true;
    }
  }
  if (!voiceFound) {
    alert('voice not found');
    return;
  }
  utterThis.lang = lang;
  utterThis.pitch = 1;
  utterThis.rate = 1; //속도
  // 음성을 소리를 내보내는 부분
  window.speechSynthesis.speak(utterThis);
}



// 페이지 표현하는 함수
export default function MakeSpeech(props) {
  // 페이지가 나오기 전에 가장 먼저 실행되는 부분
  // 페이지가 실행될 때 기반이 되는 설정들을 하는 부분
  console.log("props: ", props.match.params.place);
  useEffect(() => {
    document.body.classList.add("bg-youtube");
    setVoiceList();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = setVoiceList;
    }

    if (!window.speechSynthesis) {
      alert("음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요");
    }

    return () => {
      document.body.classList.remove("bg-youtube");
    }
  }, []);

  const [modal, setModal] = useState(false);
  // const[a, b]라고 할 때, b라는 함수를 실행시켜 a 변수에 저장시킨다.
  // useState는 변수 생성을 위해서 쓰이는 함수이다. 
  // 작동되는 방식은 입력값으로 변수의 초기값을 받는다.
  // 반환값은 변수와 변수값을 설정하는 함수이다.
  const [sentence, setSentence] = useState("");

  const [message, setMessage] = useState("");

  const onSentenceChange = (e) => {
    setSentence(e.target.value)
  }

  const onMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const toggle = () => setModal(!modal);

  const makeSpeech = () => {
    speech(sentence);
  }

  function NounList (location) {
    location=props.match.params.place
    console.log("location: ", location);
    if(location == "Bakery") {
      return (
        <Collapse className="mt-2">
          <Panel header={"명사"}>
            {BakeryNounList.map((data, index) => (
              <Button className="mt-1 ml-1" color="primary" type="button" onClick={() => { setSentence(sentence + data.name) }} style={{ maxWidth: "30%", maxHeight: "30%" }}>
                <Container>
                  <img src={data.img} style={{ display: "block", maxWidth: "100%", maxHeight: "100%" }} />
                </Container>
                {data.name}
              </Button>
            ))}
          </Panel>
        </Collapse>
      )      
    }
    else if(location == "Park") {
      return (
        <Collapse className="mt-2">
          <Panel header={"명사"}>
            {ParkNounList.map((data, index) => (
              <Button className="mt-1 ml-1" color="primary" type="button" onClick={() => { setSentence(sentence + data.name) }} style={{ maxWidth: "30%", maxHeight: "30%" }}>
                <Container>
                  <img src={data.img} style={{ display: "block", maxWidth: "100%", maxHeight: "100%" }} />
                </Container>
                {data.name}
              </Button>
            ))}
          </Panel>
        </Collapse>
      )      
    }
  }

  function VerbList (location) {
    location=props.match.params.place
    if(location == "Bakery") {
      return (
      <Collapse className="mt-2">
        <Panel header={"동사"}>
          {BakeryVerbList.map((data, index) => (
            <Button className="mt-1 ml-1" color="primary" type="button" onClick={() => { setSentence(sentence + data.name) }} style={{ maxWidth: "30%", maxHeight: "30%" }}>
              <Container>
                <img src={data.img} style={{ display: "block", maxWidth: "100%", maxHeight: "100%" }} />
              </Container>
              {data.name}
            </Button>
          ))}
        </Panel>
      </Collapse>
      )
    }
    else if(location == "Park") {
      return (
      <Collapse className="mt-2">
        <Panel header={"동사"}>
          {ParkVerbList.map((data, index) => (
            <Button className="mt-1 ml-1" color="primary" type="button" onClick={() => { setSentence(sentence + data.name) }} style={{ maxWidth: "30%", maxHeight: "30%" }}>
              <Container>
                <img src={data.img} style={{ display: "block", maxWidth: "100%", maxHeight: "100%" }} />
              </Container>
              {data.name}
            </Button>
          ))}
        </Panel>
      </Collapse>
      )
    }
  }

  const sendMessage = async () => {
    let msg = {
      "date": new Date(),
      "message": message
    }
    const kakao = Axios.create({
      headers: {
        Authorization: "KakaoAK 2dde8f0dbf6d40840e4a727cd92aab7a",
      }
    });
    // msg 변수를 https://~/message 서버로 해더와 함께 POST메소드로 요청을 보낸다.
    await Axios.post('http://localhost:3001/message', msg, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    // POST 메소드로 요청을 보낸 후, 등록완료 문구를 띄운다. then은 성공적으로 응답이 도착했을 때이다.
      .then(res => {
        setMessage("");
        alert("등록이 완료되었습니다.")
        console.log(res);
      })
      // 만약 오류가 생기면 then 부분으로 가지 않고, catch로 간다.
      .catch(error => {
        alert("백엔드 서버가 꺼져있어 등록이 성공적으로 되지 않았습니다.")
        console.log(error);
      });
  };


  // 실제 페이지가 나오는 부분
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
                <Input type="text" value={sentence} onChange={onSentenceChange} />
                <InputGroupAddon addonType="prepend"><Button color="secondary" onClick={makeSpeech}>말하기</Button></InputGroupAddon>
              </InputGroup>
            </div>
          </Container>
          <Container>
            <div className="bg-youtube text-center">
              <NounList/>
              {/* <Collapse className="mt-2">
                <Panel header={"명사"}>
                  {nounList.map((data, index) => (
                    <Button className="mt-1 ml-1" color="primary" type="button" onClick={() => { setSentence(sentence + data.name) }} style={{ maxWidth: "30%", maxHeight: "30%" }}>
                      <Container>
                        <img src={data.img} style={{ display: "block", maxWidth: "100%", maxHeight: "100%" }} />
                      </Container>
                      {data.name}
                    </Button>
                  ))}
                </Panel>
              </Collapse> */}
              <VerbList/>
              {/* <Collapse className="mt-2">
                <Panel header={"동사"}>
                  {verbList.map((data, index) => (
                    <Button className="mt-1 ml-1" color="primary" type="button" onClick={() => { setSentence(sentence + data.name) }} style={{ maxWidth: "30%", maxHeight: "30%" }}>
                      <Container>
                        <img src={data.img} style={{ display: "block", maxWidth: "100%", maxHeight: "100%" }} />
                      </Container>
                      {data.name}
                    </Button>
                  ))}
                </Panel>
              </Collapse> */}
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
                    <Input type="text" value={message} placeholder="추가 문의할 단어를 입력하세요" onChange={onMessageChange} />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>닫기</Button>
                    <Button color="primary" onClick={sendMessage}>요청하기</Button>
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
