import { gql } from '@apollo/client'

export const LOGIN = gql`
    query Login($username: String!, $password: String!) {
        user(where: {username: {_eq: $username}, password: {_eq: $password}}) {
            username
            password
        }
    }    
`

export const POSTMOVIE = gql`
    mutation MyMutation($movie_title: String!, $movie_overview: String!, $movie_genre: String!, $backdrop_path: String!, $user_id: Int!, $watched: Boolean = false) {
        insert_watchlist(objects: {movie_title: $movie_title, movie_overview: $movie_overview, movie_genre: $movie_genre, backdrop_path: $backdrop_path, user_id: $user_id, watched: $watched}) {
            affected_rows
        }
    }
    
`
export const GETWATCHLIST = gql`
    query MyQuery($userID: Int!) {
        watchlist(where: {user_id: {_eq: $userID}}) {
            id
            movie_genre
            movie_overview
            movie_title
            user_id
            watched
            backdrop_path
        }
    }
`

export const EDITWATCHLIST = gql`
    mutation MyMutation($watchlistID: Int!, $watched: Boolean!) {
        update_watchlist(where: {id: {_eq: $watchlistID}}, _set: {watched: $watched}) {
            affected_rows
        }
    }  
`
export const DELETEWATCHLIST = gql`
    mutation MyMutation($id: Int!) {
        delete_watchlist(where: {id: {_eq: $id}}) {
            affected_rows
        }
    }  
`

export const TES = gql`
    query MyQuery {
        user {
            username
            password
        }
    }
`