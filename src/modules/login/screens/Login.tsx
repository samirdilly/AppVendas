import {  NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native"
import { ContainerLogin, ImageLogo } from "../styles/login.styles";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import Text from "../../../shared/components/text/Text";
import { theme } from "../../../shared/themes/theme";
import { Icon } from "../../../shared/components/icon/Icon";
import axios from "axios";
import { useState } from "react";







const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    

    const handleOnPress = async () => {
        setLoading(true);
        const resultAxios = await axios.post('http://192.168.254.165:8080/auth', {
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

    return(
        <View>
            <ContainerLogin>
                <ImageLogo resizeMode="contain" source={require('../../../assets/images/logo.png')}/>
                <Input value={email} onChange={handleOnChangeEmail}  errorMessage={errorMessage} margin="0px 0px 8px 0px" placeholder="Digite seu E-mail" title="E-mail:"/>
                <Input value={password} onChange={handleOnChangePassword} errorMessage={errorMessage} secureTextEntry placeholder="Digite sua senha " title="Senha:"/>
                <Button  
                type={theme.buttons.buttonsTheme.primary} 
                margin='16px' 
                title="ENTRAR" 
                loading={loading}
                onPress={handleOnPress}
                />
            </ContainerLogin>
        </View>
    );
};
export default Login;