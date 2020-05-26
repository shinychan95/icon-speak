import React, { useEffect } from 'react';
import { Container } from "reactstrap";
import LocationList from "../component/LocationList"

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
              <h1 className="my-4 text-black" style={{fontSize: "4vw"}}> 찾고싶은 장소를 선택하시오. </h1>
            </div>
          </Container>
        </div>
        <div className="body bg-twitter text-center">
          <LocationList></LocationList>
        </div>
      </div>
    </>
  );
}
