import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

export default function PartOfSpeechList () {

  useEffect( () => {
    document.body.classList.add("bg-twiiter");
    return () => {
      document.body.classList.remove("bg-default");
    }
  }, []);

  
  return (
    <>
      <div className="main-content">
          <div className="header bg-orange pb-5 py-5 py-lg-6">
            <Container>
              <div className="header-body text-center">
                <h1 className="text-black">어디를 찾고있습니까?</h1>
              </div>
            </Container>
          </div>
          
      </div>
    </>
  );
}