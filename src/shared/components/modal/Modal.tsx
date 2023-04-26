
import { useState } from 'react';
import {Alert, ModalProps as ModalPropsReact, Modal as ModalReact, Pressable, View} from 'react-native';
import { ContainerModal, IconCloseModal } from './modal.style';
import Text from '../text/Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import Button from '../button/Button';


interface ModalProps extends ModalPropsReact {
    title: string;
    text: string;
    onCloseModal: () => void;
}

const Modal = ({title, text,onCloseModal, ...props}: ModalProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <ModalReact
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            onCloseModal();
            }}
            {...props}
            >
            <ContainerModal >
                <Text type={textTypes.PARAGRAPH_BOLD} color={theme.colors.mainTheme.primary} margin='16px'>{title}</Text>
                <Text>{text}</Text>
                <IconCloseModal  onPress={onCloseModal} size={13} name='cross'/>
                <Button title="OK" onPress={onCloseModal}/>
            </ContainerModal>
        </ModalReact>
    )
}

export default Modal;