import React, { useState, useEffect }  from 'react'
import Navbar from '../Components/Navbar'
import styles from './Explore.module.css'
import { Card, Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Explore() {
    const [data, setData] = useState([]);
    const [searchQuery, setQuery] = useState([]);
    //Get Method
    const apiGet = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=599c657837f4bddd29290c19f7940640&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        });
    };
    // const searchApi = (query) => {
    //     console.log(query)
    //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=599c657837f4bddd29290c19f7940640&language=en-US&query=${query}&page=1&include_adult=false`)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         setData(json);
    //     });
    // };
    const onChange = (e) => {
        setQuery(e.target.value);
        // searchApi(searchQuery);
    };
    useEffect(() => {
      apiGet();
    //   searchApi();
    }, []);
    return (
        <div>
            <Navbar/>
            <Form>      
            <Form.Control className = {styles.searchBar} placeholder="Search.."/>
            </Form>
            <Container>
            <Row xs="auto">
            {data.results?.map((obj,idx) =>(
            <Link to={"/explore/"+obj.id} className={styles.resetThis}>
                <Card style={{ width: '18rem',height: '23rem' }} className={styles.movieCard}>
                    <Card.Img src={"https://image.tmdb.org/t/p/original"+obj.backdrop_path} className= {styles.moviePoster} />
                    
                    <h4 className={styles.movieTitle}>{obj.title}</h4>
                </Card>
            </Link>
            ))}
            </Row>
            </Container>
        </div>
    )
}

export default Explore
