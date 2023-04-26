import { TextInputProps, View } from "react-native";
import { ContainerInput } from "./Input.style";
import { DiplayFlexColumm } from "../globalStyles/globalView.style";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { theme } from "../../themes/theme";

interface InputProps extends TextInputProps {
    title?: string;
    errorMessage?: string;
}

const Input = ({title, errorMessage, ...props}: InputProps) => {
    return (
    <DiplayFlexColumm>
        {title &&(
            <Text margin='0px 0px 4px 8px' 
            color={theme.colors.grayTheme.gray100} 
            type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
            >
            {title}
            </Text>
        )}
        <ContainerInput isError={!!errorMessage} {...props} />
        {errorMessage &&(
            <Text margin="0px 0px 0px 8px" type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD} color={theme.colors.orangeTheme.orange80}>
                {errorMessage}
            </Text>
        )}
    </DiplayFlexColumm>
    
    )
}

export default Input; 