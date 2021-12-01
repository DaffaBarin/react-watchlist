import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from '../Components/Navbar'
import Face from '../Assets/Images/beautifulFace.svg'
import styles from './AboutMe.module.css'
import Footer from '../Components/Footer'

function AboutMe() {
    return (
        <div>
            <Navbar/>
            <Container className={styles.container}>
                <Row>
                    <Col sm={4} >
                        <img src={Face} alt="myface" className="mr-5"/>
                    </Col>
                    <Col sm={8}>
                        <h4 className={styles.intro}>Hi! I'm Daffa Barin</h4>
                        <h4 className={styles.punchline}>I make things happen!</h4>
                        <h6 className={styles.aboutText}>I'm a 20 years old Informatics undergraduate students, I'm a software engineer in the making!</h6>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default AboutMe
