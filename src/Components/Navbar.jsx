import styles from "./Navbar.module.css"
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import Logo from '../Assets/Images/Logo.svg'
import ProfilePic from '../Assets/Images/profilePicture.svg'
import useLogin from "../Hooks/useLogin";


function Navbarr() {
    const localUsername = localStorage.getItem("username")
    const localPassword = localStorage.getItem("password")
    let {dataLogin, loadingLogin, errorLogin} = useLogin(localUsername,localPassword);
    return (
        <>
        {!loadingLogin && !errorLogin && <Navbar className={styles["navbar"]} variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img
                        alt=""
                        src={Logo}
                        
                        width="250"
                        height="30"
                        className="d-inline-block align-top"
                        />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/"><h5 className={styles["navText"]}>Home</h5></Nav.Link>
                    <Nav.Link href="/watchlist"><h5 className={styles["navText"]}>Watchlist</h5></Nav.Link>
                    <Nav.Link href="/explore"><h5 className={styles["navText"]}>Explore </h5></Nav.Link>
                    <Nav.Link href="/aboutme"><h5 className={styles["navText"]}>About Me </h5></Nav.Link>
                </Nav>
                { dataLogin?.user[0] == null &&
                <Nav>
                    <Nav.Link><h5 className={`${styles["navText"]}`}>Sign Up</h5></Nav.Link>
                    <Nav.Link className={styles["signIn"]} href="/login"><h5 className={`${styles["signInText"]}`}>Sign In</h5></Nav.Link>
                    <Nav.Link href="/"><img
                        alt=""
                        src={ProfilePic}
                        className = {styles["profilePicture"]}
                        /></Nav.Link>
                </Nav>
                }
                { dataLogin.user[0] &&
                <Nav>
                    <Nav.Link href="#link"><h5 className={`${styles["navText"]}`}>Hello, {dataLogin?.user[0].username}!</h5></Nav.Link>
                    <Nav.Link href="#link"><img
                        alt=""
                        src={ProfilePic}
                        className = {styles["profilePicture"]}
                        /></Nav.Link>
                </Nav>
                }
                </Navbar.Collapse>
            </Container>
        </Navbar>}
</>
    )
}

export default Navbarr
