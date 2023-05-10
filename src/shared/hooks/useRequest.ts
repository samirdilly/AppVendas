import { useState } from "react";
import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { RequestLogin } from "../types/requestLogin";
import { ReturnLogin } from "../types/returnLogin";
import { UserType } from "../types/userType";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../store/reducers/userReducer";
import { userUserReducer } from "../../store/reducers/userReducer/useUserReducer";


export const useRequest = () => {
     const {setUser} = userUserReducer();
     const dispatch = useDispatch();   
     const [loading, setLoading] = useState<boolean>(false);
     const [errorMessage, setErrorMessage] = useState<string>('');

     const authRequest = async (body: RequestLogin) => {
        setLoading(true);

        await connectionAPIPost<ReturnLogin>('http://192.168.254.165:8080/auth', body)
        .then((result) => {
            setUser(result.user);
        })
        .catch(() => {
            setErrorMessage('Usuário ou senha inválidos')
        });

        setLoading(false);
     }

     return {
        loading,
        errorMessage,
        authRequest,
        setErrorMessage
     }
}