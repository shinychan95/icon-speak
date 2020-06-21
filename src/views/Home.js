import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import HomeImage from "../img/icon.png"

export default function Home () {

  useEffect( () => {
    document.body.classList.add("bg-orange");
    return () => {
      document.body.classList.remove("bg-orange");
    }
  }, []);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  
  return (
    <>
      <div className="main-content">
          <div className="header bg-orange mt-4 mb-4">
            <Container>
              <div className="header-body text-center">
                <h1 className="text-black">Icon Speak</h1>
              </div>
            </Container>
          </div>
          <div className="body bg-orange pb-9">
            <Container className="py-1 pb-4 text-center">
              <Col className="justify-content-center">
                <img src={HomeImage} style={{margin:"auto", display: "block", maxWidth: "80%", maxHeight: "fill-available"}}/>              
              </Col>
            </Container>
            <Container className="mt-4 text-center">
              <Col className="justify-content-center">
                <Link to="/SelectLocation">
                  <Button className="my-1" color="primary" type="button">
                    시작하기
                  </Button>
                </Link>
              </Col>
            </Container>
            <Container className="mt-3 text-center">
              <Col className="justify-content-center">
                <Button color="info" onClick={toggle}>도움말</Button>
                <Modal isOpen={modal} toggle={toggle} className="">
                  <ModalHeader toggle={toggle}>사용법</ModalHeader>
                  <ModalBody>
                    1. 시작하기를 누르세요. <br></br>
                    2. 자신이 찾고 있는 장소를 선택하세요. <br></br>
                    3. 자신이 있는 위치를 핀으로 놓으세요. <br></br>
                    4. 핀으로 놓은 위치 범위 안에 있는 선택한 장소들이 나옵니다. 그러면 자신이 가고자 하는 장소를 선택하세요. <br></br>
                    5. 자신이 말하고자 하는 단어들이 있는 품사를 선택하세요.<br></br>
                    6. 자신이 말하고자 하는 단어를 선택하세요. 그럼 문장란에 단어가 추가됩니다.<br></br>
                    7. 자신이 말하고자 하는 단어들로 문장을 완성했다면, 말하기 버튼을 누르세요.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>닫기</Button>
                  </ModalFooter>
                </Modal>
              </Col>
            </Container>           
          </div>
          <div className="footer bg-orange">

          </div>
      </div>
    </>
  );
}
