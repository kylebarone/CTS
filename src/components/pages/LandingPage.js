import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function LandingPage() {


    return (
        <div className='content-wrapper'>
            <Card className=" w-100 text-black" >
                <Card.Img src="./beach1.webp" alt="Card image" style={{ opacity: "0.7", objectFit: "cover", maxHeight: "615px" }} />
                <Card.ImgOverlay>
                    <Card.Title>THIS IS LANDING PAGE</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Body>
                    
                    </Card.Body>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>

    )
}

export default LandingPage