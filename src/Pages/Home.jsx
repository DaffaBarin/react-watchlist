import React from 'react'
import Navbar from '../Components/Navbar'
import styles from './Home.module.css'
import { Card } from 'react-bootstrap'
import movieLogo from '../Assets/Images/movie.svg'
import Button  from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>
           <div className={styles.bgImg}></div>
            <Navbar/>
            <Card className = {`${styles.homeCard}`}>
                <Card.Img className = {styles.movieLogo} variant="top" src = {movieLogo}/>
                <Card.Body>
                    <Card.Title className = {styles.welcomeText}>WELCOME TO PERSONAL WATCHLIST!</Card.Title>
                    <Card.Text>    
                    We help you make your personal movie watchlist. Track and manage movies and TV Show you wanted to watch. Find the genre, release date, and duration to match your needs.
                    </Card.Text>
                    <Link to="/explore">
                    <Button  className = {styles.buttonHome}>Explore Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home
