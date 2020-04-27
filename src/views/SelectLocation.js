import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

export default function SelectLocation () {

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
          <div className="body bg-youtube pb-9">
            <Container>
              <div className="body bg-youtube pb-9">
                <ListGroup>
                  <ListGroupItem tag="a" href="/choose1" action>파리가게뜨</ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>뚜레쥬르</ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>OO빵집</ListGroupItem>
                  <ListGroupItem tag="a" href="/choose1" action>XX베이커리</ListGroupItem>
                </ListGroup>
              </div>
            </Container>
          </div>
      </div>
    </>
  );
}
