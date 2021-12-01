import React from 'react'
import styles from './Login.module.css'
import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      }, [username,password]);
    
    const onSubmit = () =>{
        // console.log(username,password)
        navigate('/')
    }
    return (
        <div>
            <div className={styles.bgImg}></div>
            <div className={styles.Logo}></div>
            <Card className = {`${styles.loginCard}`}>
                <Card.Body>
                    <Card.Title className = {styles.title}>Login</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label className={styles.formLabel}>Username</Form.Label>
                            <Form.Control className = {styles.formControl} type="username" value={username}
                            onChange={(e) => setUsername(e.target.value)} placeholder="Insert your username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={styles.formLabel}>Password</Form.Label>
                            <Form.Control className = {styles.formControl} type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} placeholder="Insert your password" />
                        </Form.Group>
                        
                    </Form>
                    <Button className ={styles.button} onClick={onSubmit}>
                            Log In
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
