import React from "react"
import { Container, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import locationList from "./locationList/locationList";

export default function LocationList () {
	return (	
		<>
			<div>{
				// locationList(각 장소들의 사진과 이름이 들어있는)의 목록에서 처음부터 순서대로 버튼화시킨다.
				locationList.map((data, i) => {
					return (
						<Link to={data.link}>
							<Button className="mt-2 ml-2" color="primary" type="button" style={{maxWidth: "30%", maxHeight: "30%"}}>
								<Container className="py-1">
									<img src={data.img} style={{display: "block", maxWidth: "100%", maxHeight: "100%"}}/>                        
								</Container>
								{data.name}
							</Button>                  
						</Link>
					)
				})
				}
			</div>
		</>
	)
}