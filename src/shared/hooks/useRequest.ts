import { useState } from "react";
import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { RequestLogin } from "../types/requestLogin";
import { ReturnLogin } from "../types/returnLogin";


import { userUserReducer } from "../../store/reducers/userReducer/useUserReducer";
import { useGlobalReducer } from "../../store/reducers/globalReducer/useGlobalReducer";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../enums/menuUrl.enum";
import { setAuthorizationToken } from "../functions/connection/auth";


export const useRequest = () => {
     const {reset} = useNavigation<NavigationProp<ParamListBase>>();
     const {setUser} = userUserReducer();
     const {setModal} = useGlobalReducer();
     const [loading, setLoading] = useState<boolean>(false);
     const [errorMessage, setErrorMessage] = useState<string>('');

     const authRequest = async (body: RequestLogin) => {
        setLoading(true);

        await connectionAPIPost<ReturnLogin>('http://192.168.254.165:8080/auth', body)
        .then((result) => {
            setAuthorizationToken(result.acessToken);
            setUser(result.user);
            reset({
                index: 0,
                routes: [{name: MenuUrl.HOME}],
            });
        })
        .catch(() => {
            setModal({
                visible: true,
                title: 'Erro',
                text: 'Usuário ou senha inválidos',
            })
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