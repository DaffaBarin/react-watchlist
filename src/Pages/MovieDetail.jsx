import React, { useState, useEffect }  from 'react'
import { useParams } from 'react-router'
import Navbar from '../Components/Navbar';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import styles from './MovieDetail.module.css'
import Button from '@restart/ui/esm/Button';
import usePostMovieToWatchlist from '../Hooks/usePostMovieToWatchlist';

function MovieDetail() {
    const [data, setData] = useState([]);
    let params = useParams()
    let url = `https://api.themoviedb.org/3/movie/${params.movieID}?api_key=599c657837f4bddd29290c19f7940640&language=en-US`
    console.log(url)

    //Get Method
    const apiGet = () => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        });
    };
    useEffect(() => {
      apiGet();
    }, []);
    console.log(data)

    const {postMovieToWatchlist, loadingPostMovie} = usePostMovieToWatchlist()

    const onClick = () => {
        postMovieToWatchlist({
            variables: {user_id: 1, movie_title: data.title, movie_overview: data.overview, movie_genre: data.genres[0].name,backdrop_path: data.backdrop_path}
        })
        alert(`${data.title} successfully inserted to watchlist!`)
    }
    return (
        <div>
            <Navbar/>
            <Container className={styles.containerWidth}>
                <Row>
                    <Col sm={4}>
                        <img src={"https://image.tmdb.org/t/p/original"+data.backdrop_path} className={styles.movieDetail} alt="sebuahGambar"></img>
                    </Col>
                    <Col sm={8}>
                    <h1 className={styles.movieTitle}>{data.title}</h1>
                    <h6 className={styles.movieProps}>Release Year</h6>
                    <h6>{data?.release_date?.slice(0,4)}</h6>
                    <h6 className={styles.movieProps}>Runtime</h6>
                    <h6>{Math.floor(data.runtime/60)}h{data.runtime%60}m</h6>
                    <h6 className={styles.movieProps}>Genre</h6>
                    {data.genres?.map((obj,idx) => (
                        <span className="d-inline-flex" style={{marginRight:"10px"}} key={idx}>{obj.name}</span>))}
                    <h6 className={styles.movieProps}>Overview</h6>
                    <h6>{data.overview}</h6>
                    <Button className ={styles.button} onClick = {onClick} >
                            Add To Watchlist
                    </Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default MovieDetail
