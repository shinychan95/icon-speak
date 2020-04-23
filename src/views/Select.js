import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

import Park from "../아이콘 그림/썸네일-jpeg/공원.jpg"
import Train from "../아이콘 그림/썸네일-jpeg/기차역-1.jpg"
import PlayGround from "../아이콘 그림/썸네일-jpeg/놀이터.jpg"
import Mart from "../아이콘 그림/썸네일-jpeg/마트.jpg"
import Salon from "../아이콘 그림/썸네일-jpeg/미용실.jpg"

import Dpeartment from "../아이콘 그림/썸네일-jpeg/백화점-1.jpg"
import Bus from "../아이콘 그림/썸네일-jpeg/버스정류장.jpg"
import Bakery from "../아이콘 그림/썸네일-jpeg/베이커리.jpg"
import Hospital from "../아이콘 그림/썸네일-jpeg/병원.jpg"
import Church from "../아이콘 그림/썸네일-jpeg/성당교회.jpg"

import Swimming from "../아이콘 그림/썸네일-jpeg/수영장.jpg"
import Restaurant from "../아이콘 그림/썸네일-jpeg/식당-2.jpg"
import Aquarium from "../아이콘 그림/썸네일-jpeg/아쿠아리움.jpg"
import Apartment from "../아이콘 그림/썸네일-jpeg/아파트-2.jpg"
import Pharmacy from "../아이콘 그림/썸네일-jpeg/약국.jpg"

import Theater from "../아이콘 그림/썸네일-jpeg/영화관.jpg"
import Post from "../아이콘 그림/썸네일-jpeg/우체국-2.jpg"
import Bank from "../아이콘 그림/썸네일-jpeg/은행.jpg"
import Gas from "../아이콘 그림/썸네일-jpeg/주유소-2.jpg"
import Subway from "../아이콘 그림/썸네일-jpeg/지하철역-2.jpg"

export default function Select () {

  useEffect( () => {
    document.body.classList.add("bg-twitter");
    return () => {
      document.body.classList.remove("bg-twitter");
    }
  }, []);

  return (
    <>
      <div className="main-content">
        <div className="header bg-twitter pb-1 py-3 py-lg-6">
          <Container>
            <div className="header-body text-center">
              <h1 className="text-black">찾고싶은 장소를 선택하시오.</h1>
            </div>
          </Container>
        </div>
        <div className="body bg-twitter pb-9">
          <Container>
            <Row>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container className="py-1">
                      <img src={Park} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                        
                    </Container>
                    공원
                  </Button>                  
                </Link>
              </Col>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container className="py-1">
                      <img src={Train} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    기차역
                  </Button>                   
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container className="py-1">
                      <img src={PlayGround} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    놀이터
                  </Button>                   
                </Link>
              </Col>    
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container className="py-1">
                      <img src={Mart} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    마트
                  </Button>                   
                </Link>
              </Col>         
            </Row>
            <Row>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container className="py-1">
                      <img src={Salon} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    미용실
                  </Button>                    
                </Link>
              </Col>      
              <Col>
                < Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container className="py-1">
                      <img src={Dpeartment} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    백화점
                  </Button>                    
                </Link>
              </Col>  
            </Row>
            <Row>                            
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container className="py-1">
                      <img src={Bus} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    버스정류장
                  </Button>                    
                </Link>
              </Col>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container className="py-1">
                      <img src={Bakery} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    베이커리
                  </Button>                   
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container className="py-1">
                      <img src={Hospital}style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    병원
                  </Button>                     
                </Link>
              </Col>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container className="py-1">
                      <img src={Church} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    성당 및 교회
                  </Button>                   
                </Link>   
              </Col>
            </Row>
            <Row>
              <Col>
                <Link>
                  <Button className="my-2" color="primary" type="button">
                    <Container>
                      <img src={Swimming} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    수영장
                  </Button>                 
                </Link>
              </Col>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container>
                      <img src={Restaurant} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    식당
                  </Button>                    
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container>
                      <img src={Aquarium} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    아쿠아리움
                  </Button>                    
                </Link>  
              </Col>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container>
                      <img src={Apartment} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    아파트
                  </Button>                    
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container>
                      <img src={Pharmacy} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    약국
                  </Button>                    
                </Link>
              </Col>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container>
                      <img src={Theater} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    극장
                  </Button>                    
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container>
                      <img src={Post} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    우체국
                  </Button>                    
                </Link>
              </Col>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container>
                      <img src={Bank} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    은행
                  </Button>                      
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container>
                      <img src={Gas} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    주유소
                  </Button>                    
                </Link>
              </Col>
              <Col>
                <Link to="/map_search">
                  <Button className="my-2" color="primary" type="button">
                    <Container>
                      <img src={Subway} style={{display: "block", maxWidth: "100%", maxHeight: "fill-available"}}/>                      
                    </Container>
                    지하철역
                  </Button>                    
                </Link>
              </Col>
            </Row>
          </Container>  
        </div>
      </div>
    </>
  );
}
