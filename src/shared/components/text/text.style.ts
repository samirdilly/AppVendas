import styled from 'styled-components/native';


interface ContainerTextProps {
    color?: string;
    fontSize: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-Ligth' | 'Poppins-Regular' | 'Poppins-SemiBold';
}


export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props) => (props.color ? `color: ${props.color}` : '')}
    
    padding-top:3px;
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize};

`;