import {  View } from "react-native"
import { ContainerLogin, ImageLogo } from "../styles/login.styles";
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
                <ImageLogo resizeMode="contain" source={require('../../../assets/images/logo.png')}/>
                <Input margin="0px 0px 8px 0px" placeholder="Digite seu E-mail" title="E-mail:"/>
                <Input secureTextEntry placeholder="Digite sua senha " title="Senha:"/>
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