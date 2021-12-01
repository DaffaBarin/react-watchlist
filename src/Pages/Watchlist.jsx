import React from 'react'
import useGetWatchlist from '../Hooks/useGetWatchlist'
import useEditWatchlist from '../Hooks/useEditWatchlist';
import useDeleteWatchlist from '../Hooks/useDeleteWatchlist';
import { useState,useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Container } from 'react-bootstrap';
import styles from './Watchlist.module.css'
import { Row,Col } from 'react-bootstrap';
import trashBin from '../Assets/Images/trashBin.svg';
import Button from '@restart/ui/esm/Button';

function Watchlist() {
    const [watchlist, setWatchlist] = useState([]);
    const { dataWatchlist, loadingWatchlist, errorWatchlist } = useGetWatchlist(1)
    const {editWatchlist, loadingEditWatchlist} = useEditWatchlist()
    const {deleteWatchlist, loadingDeleteWatchlist} = useDeleteWatchlist()
    useEffect(() => {
        if (dataWatchlist){
            console.log("sebuah congsol",dataWatchlist)
            setWatchlist(dataWatchlist.watchlist)
        }
      }, [dataWatchlist]);
    const changeStatus = (currentMovieID) => {
        const currentStatus = watchlist.find(element => element.id === currentMovieID);
        editWatchlist({
            variables: {watchlistID: currentMovieID , watched: !currentStatus.watched }
        })
        alert(`status ${currentStatus.movie_title} diubah`)
    }
    const deleteMovie = (currentMovieID) => {
        deleteWatchlist({
            variables: {id: currentMovieID }
        })
        alert(`movie terhapus`)
    }
    console.log(watchlist)
    return (
        <>
        <Navbar/>
        <Container className={styles.movieContainer}>
            <h4 className={styles.subTitle}>Your Watchlist</h4>
            {watchlist.filter((item) => item.watched === false).map((obj,idx) =>(
                <>
                    <Row className="m-5">
                        <Col sm={3}>
                            <img src={"https://image.tmdb.org/t/p/original"+obj.backdrop_path} className={styles.watchlistPoster} alt={obj.movie_title}></img>
                        </Col>
                        <Col sm={7}>
                            <h1 className={styles.movieTitle}>{obj.movie_title}</h1>
                            <h6 className={styles.movieAttr}>{obj.movie_genre}</h6>
                            <h6 className={styles.movieOverview}>{obj.movie_overview}</h6>
                        </Col>
                        <Col sm={2} className="d-flex flex-column">
                            <Button className={styles.watchButton}><span className = {styles.buttonText} onClick={() => changeStatus(obj.id)}>Watch</span></Button>
                            <img src={trashBin} className={styles.trashbinPic} alt="trashbin" onClick={()=> deleteMovie(obj.id)}></img>
                        </Col>
                    </Row>
                
                </>
            ))}
            <h4 className={styles.subTitle}>Watched</h4>
            {watchlist.filter((item) => item.watched === true).map((obj,idx) =>(
                <>
                    <Row className="m-5">
                        <Col sm={3}>
                            <img src={"https://image.tmdb.org/t/p/original"+obj.backdrop_path} className={styles.watchlistPoster} alt={obj.movie_title}></img>
                        </Col>
                        <Col sm={7}>
                            <h1 className={styles.movieTitle}>{obj.movie_title}</h1>
                            <h6 className={styles.movieAttr}>{obj.movie_genre}</h6>
                            <h6 className={styles.movieOverview}>{obj.movie_overview}</h6>
                        </Col>
                        <Col sm={2} className="d-flex flex-column">
                            <Button className={styles.watchButton2}><span className = {styles.buttonText2} onClick={() => changeStatus(obj.id)}>Unwatch</span></Button>
                            <img src={trashBin} className={styles.trashbinPic} alt="trashbin" onClick={()=> deleteMovie(obj.id)}></img>
                        </Col>
                    </Row>
                </>
            ))}
        </Container>
        </>
    )
}

export default Watchlist
