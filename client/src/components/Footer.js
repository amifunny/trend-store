import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { siReact } from 'simple-icons/icons';
import './Footer.css';
import {FaReact, FaBootstrap, FaPaypal} from 'react-icons/fa';
import {SiDjango, SiPostgresql} from 'react-icons/si';
import {BiTrendingUp} from 'react-icons/bi'

function Footer() {

    const techIcons = [
        <FaReact />,
        <SiDjango />,
        <SiPostgresql />,
        <FaBootstrap />,
        <FaPaypal />
    ]

	const techUsed = [
		'React',
		'Django',
		'PostgreSQL',
		'Bootstrap',
        'PayPal API'
	]
	
    const phone = "999 111 999"
	const email = "hemantsingh .buenodev @gmail.com"
    
    const githubID = "https://github.com/amifunny/"
    const angelLink = "https://angel.com"

    return (
        <footer>

            <Container className='footer-bar' fluid>
            <Container>
            	<Row>
            		<Col className="footer-col" md={5}>
            			<div className="footer-logo">
                            <BiTrendingUp className='mr-2' />
                            Trend Store
                        </div>
            			<div>Contact - {phone}</div>
            			<div>Email - {email}</div>
            		</Col>
            		<Col className="footer-col" md={5}>
            			<div>Technologies used</div>
            			{
            				techUsed.map((tech,i)=>(
	            				<div key={i}>
                                    <span className="mr-2">{techIcons[i]}</span>
		            				<span>{tech}</span>
		            			</div>
        					))
            			}
            		</Col>
            		<Col className="footer-col" md={2}>
            			<div>Follow us</div>
            			<div>
            				<div>
                                <a href={githubID} className="footer-link"
                        		target="_blank">Github</a>
                            </div>
            				<div>
                                <a href={angelLink} className="footer-link"
                                target="_blank">Angel</a>
                            </div>
        				</div>
            		</Col>
                </Row>
            </Container>
            </Container>
            <Container className='footer-make-tag' fluid>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                    	Made by <a href={githubID} className="footer-link"
                    	target="_blank">amifunny</a>
                    </Col>
                </Row>
            </Container>
            </Container>

        </footer>
    )
}

export default Footer
