import {  View } from "react-native"
import { ContainerLogin } from "../styles/login.styles";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import Text from "../../../shared/components/text/Text";
import { theme } from "../../../shared/themes/theme";
import { Icon } from "../../../shared/components/icon/Icon";






const Login = () => {

    const handleOnPress = () => {
        console.log("clicou");
    };

    return(
        <View>
            <ContainerLogin>
                <Icon name="home3" color='blue' size={44}/>
                <Input 
                errorMessage="Usuário ou senha inválidos" 
                placeholder="Digite seu E-mail" 
                title="E-mail"
                />
                <Button  
                type={theme.buttons.buttonsTheme.primary} 
                margin='16px' 
                title="ENTRAR" 
                
                onPress={handleOnPress}
                />
            </ContainerLogin>
        </View>
    );
};
export default Login;