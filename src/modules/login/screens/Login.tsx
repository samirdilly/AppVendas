import {  View } from "react-native"
import { ContainerLogin } from "../styles/login.styles";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import Text from "../../../shared/components/text/Text";
import { theme } from "../../../shared/themes/theme";

const Login = () => {

    const handleOnPress = () => {
        console.log("clicou");
    };

    return(
        <View>
            <ContainerLogin>
                <Text>teste de estilo</Text>
                <Input />
                <Button  type={theme.buttons.buttonsTheme.primary} margin='16px' title="ENTRAR" onPress={handleOnPress}/>
            </ContainerLogin>
        </View>
    );
};
export default Login;