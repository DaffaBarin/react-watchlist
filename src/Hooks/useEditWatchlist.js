import { useMutation} from "@apollo/client";
import { EDITWATCHLIST,GETWATCHLIST } from "../GraphQL/Query";

export default function useEditWatchlist(){
    const [editWatchlist,{
        loading: loadingEditWatchlist,}
    ] = useMutation(EDITWATCHLIST,{refetchQueries:[GETWATCHLIST]});
    return {editWatchlist, loadingEditWatchlist}
}
