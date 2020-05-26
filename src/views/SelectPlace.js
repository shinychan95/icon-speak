import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

export default function SelectPlace () {

  useEffect( () => {
    document.body.classList.add("bg-youtube");
    return () => {
      document.body.classList.remove("bg-youtube");
    }
  }, []);

  
  return (
    <>
      <div className="main-content">
          <div className="header bg-youtube pb-1 py-3 py-lg-6">
            <Container>
              <div className="header-body text-center">
                <h1 className="text-black">어디를 찾고있습니까?</h1>
              </div>
            </Container>
          </div>
          <div className="body bg-youtube pb-3">
            <Container>
              <div className="body bg-youtube">
                <ListGroup>
                  <ListGroupItem tag="a" href="/ChoosePartofSpeech/ParisBaguette" action>파리바게트</ListGroupItem>
                  <ListGroupItem tag="a" href="/choosePartofSpeech/TousLesJours" action>뚜레쥬르</ListGroupItem>
                  <ListGroupItem tag="a" href="/choosePartofSpeech/00bakerty" action>OO빵집</ListGroupItem>
                  <ListGroupItem tag="a" href="/choosePartofSpeech/XXbakery" action>XX베이커리</ListGroupItem>
                </ListGroup>
              </div>
            </Container>
          </div>
          <div className="pb-1 pl-5">
            <Link to="/MapSearch">
              <Button color="secondary" type="button">뒤로가기</Button>
            </Link>
          </div>
      </div>
    </>
  );
}
