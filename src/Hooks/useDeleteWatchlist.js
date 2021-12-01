import { useMutation} from "@apollo/client";
import { DELETEWATCHLIST,GETWATCHLIST } from "../GraphQL/Query";

export default function useDeleteWatchlist(){
    const [deleteWatchlist,{
        loading: loadingDeleteWatchlist,}
    ] = useMutation(DELETEWATCHLIST,{refetchQueries:[GETWATCHLIST]});
    return {deleteWatchlist, loadingDeleteWatchlist}
}
