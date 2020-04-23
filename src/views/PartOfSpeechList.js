import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

export default function PartOfSpeechList () {

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
                <h1 className="text-black">찾을 단어가 있는 품사를 고르시오</h1>
              </div>
            </Container>
          </div>
          <div className="body bg-youtube pb-9">
            <Container>
              <div className="body bg-youtube pb-9">
                <h3>품사를 선택하시오</h3>
                <ListGroup>
                  <ListGroupItem tag="a" href="/choose2" action>명사</ListGroupItem>
                  <ListGroupItem tag="a" href="/choose2" action>동사</ListGroupItem>
                  <ListGroupItem tag="a" href="/choose2" action>형용사</ListGroupItem>
                  <ListGroupItem tag="a" href="/choose2" action>부사</ListGroupItem>
                </ListGroup>
              </div>
            </Container>
          </div>
      </div>
    </>
  );
}
