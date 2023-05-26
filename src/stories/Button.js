import {styled} from 'styled-cmponents';

const ButtonContainer = styled.button`
    /*기본 스타일 제거*/
    border: none;
    outline: none;

    /*레이아웃*/
    display: flex;
    align-items: center;

    /*공통 스타일*/
    color: rgb(130, 130, 130);
    background-color: white;
    border-radius: 4px;
    cursor: pointer;

    ${(props)=>
        props.primary?
        css`
        border-color: black;
        background-color: black;
        color: white;

        &:hover {
            background-color: white;
            color: black;
        }

        &:active {
            background-color: white;
            color: black;
        }
    `
        :
        css`
        border-color: black;
        background-color: white;
        color: black;

        &:hover {
            background-color: white;
            color: black;
        }

        &:active {
            background-color: white;
            color: black;
        }
        `
    }
`;

export const Button =({primary, text})=> {
    return (
        <ButtonContainer primary={primary}>
            {text}
        </ButtonContainer>
    )
} 