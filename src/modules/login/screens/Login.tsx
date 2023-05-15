import { View } from "react-native"
import { ContainerLogin, ImageLogo } from "../styles/login.styles";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/theme";
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";
import { getAuthorizationToken } from "../../../shared/functions/connection/auth";
import { useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/menuUrl.enum";


const Login = () => {

    const navigation = useNavigation();
    const {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    } = useLogin();

    useEffect(() => {
        const test = async () => {
            const token = await getAuthorizationToken();
            if (token) {
                navigation.navigate(MenuUrl.HOME);
            };
            console.log(token)
        };
        

        test();
    },[])

    return(
        <View>
            <ContainerLogin>
                <ImageLogo resizeMode="contain" source={require('../../../assets/images/logo.png')}/>
                <Input 
                value={email} 
                onChange={handleOnChangeEmail}  
                errorMessage={errorMessage} 
                margin="0px 0px 8px 0px" 
                placeholder="Digite seu E-mail" 
                title="E-mail:"
                />
                <Input 
                value={password} 
                onChange={handleOnChangePassword} 
                errorMessage={errorMessage} 
                secureTextEntry placeholder="Digite sua senha " 
                title="Senha:"
                />
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