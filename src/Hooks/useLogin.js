import { useQuery } from "@apollo/client";
import { LOGIN } from "../GraphQL/Query";


export default function useLogin(uname,pword){
    console.log("parameter loginnnnnnn",uname,pword)
    const {
        data: dataLogin,
        loading: loadingLogin,
        error: errorLogin,
    } = useQuery(LOGIN,{ variables: {username: uname, password: pword}});
    return { dataLogin, loadingLogin, errorLogin }
}
