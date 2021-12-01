import { useMutation} from "@apollo/client";
import { POSTMOVIE } from "../GraphQL/Query";

export default function usePostMovieToWatchlist(){
    const [postMovieToWatchlist,{
        loading: loadingPostMovie,}
    ] = useMutation(POSTMOVIE);
    return {postMovieToWatchlist, loadingPostMovie}
}
