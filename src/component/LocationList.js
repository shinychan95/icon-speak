import React from "react"
import { Container, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import locationList from "./locationList/locationList";

export default function LocationList () {
	return (	
		<>
			<div>{
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