import axios from "axios";
import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native/types";
import { connectionAPIPost } from "../../../shared/functions/connection/connectionAPI";

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    

    const handleOnPress = async () => {
        setLoading(true);
       await connectionAPIPost('http://192.168.254.165:8080/auth', {
            email,
            password,
        }).catch(() => {
            setErrorMessage('Usuário ou senha inválidos')
        });
        setLoading(false)
        console.log("clicou");
    };

    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setEmail(event.nativeEvent.text);
    };

    const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setpassword(event.nativeEvent.text);
    }

    return {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword
    }
}