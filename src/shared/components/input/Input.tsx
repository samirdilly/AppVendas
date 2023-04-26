import { TextInputProps, View } from "react-native";
import { ContainerInput, IconEye } from "./Input.style";
import { DiplayFlexColumm } from "../globalStyles/globalView.style";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { theme } from "../../themes/theme";
import { useState } from "react";
import { Icon } from "../icon/Icon";

interface InputProps extends TextInputProps {
    title?: string;
    errorMessage?: string;
    secureTextEntry?: boolean;
    margin?: string;
    
}

const Input = ({title, margin, errorMessage, secureTextEntry, ...props}: InputProps) => {

    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

    const handleOnPressEye = () => {
        setCurrentSecure ((current) => !current);
    };

    return (
    <DiplayFlexColumm customMargin={margin}>
        {title &&(
            <Text margin='0px 0px 4px 8px' 
            color={theme.colors.grayTheme.gray100} 
            type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
            >
            {title}
            </Text>
        )}
        <View>
            <ContainerInput hasSecureTextEntry={secureTextEntry} secureTextEntry={currentSecure} isError={!!errorMessage} {...props} />
            {secureTextEntry && <IconEye onPress={handleOnPressEye} name={currentSecure ? "eye" : "eye-blocked"} size={20}/>}
        </View>
        {errorMessage &&(
            <Text margin="0px 0px 0px 8px" type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD} color={theme.colors.orangeTheme.orange80}>
                {errorMessage}
            </Text>
        )}
    </DiplayFlexColumm>
    
    )
}

export default Input; 