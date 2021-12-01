import { useQuery } from "@apollo/client";
import { TES } from "../GraphQL/Query";

export default function Tes(){
    const {
        data: tes1,
        loading: tes2,
        error: tes3,
    } = useQuery(TES);
    return {tes1,tes2,tes3}
}