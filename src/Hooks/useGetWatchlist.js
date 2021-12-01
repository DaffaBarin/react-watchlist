import { useQuery } from "@apollo/client";
import { GETWATCHLIST } from "../GraphQL/Query";


export default function useGetWatchlist(userID){
    console.log("harusnya satu",userID)
    const {
        data: dataWatchlist,
        loading: loadingWatchlist,
        error: errorWatchlist,
    } = useQuery(GETWATCHLIST,{ variables: {userID: userID}});
    return { dataWatchlist, loadingWatchlist, errorWatchlist }
}
