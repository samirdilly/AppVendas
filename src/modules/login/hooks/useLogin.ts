import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native/types";
import { useRequest } from "../../../shared/hooks/useRequest";

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const { authRequest, errorMessage, loading, user, setErrorMessage } = useRequest();

    const handleOnPress = async () => {
        authRequest({
            email,
            password,
        });
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