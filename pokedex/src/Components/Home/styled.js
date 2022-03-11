import styled from "styled-components";
import Background from '../../Media/background.png'

export const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${Background});
background-size: cover;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
min-height: 100vh;
`

export const CardContainer= styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
`;

export const Card= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width:250px;
    text-align:center;
    border: 5px outset #dee6ee;
    margin:10px;
    background-color:#dee6ee;
    >img{
        width: 80%;
        background-color: #bdcde6 ;
        border: #bdcde6 inset 5px;        
    }
    >p{
        padding: 5px;
    }
`;

export const ButtonContainer= styled.div`
    display:flex;
    flex-direction: column;
    margin: 8px;
    width: 210px;
    justify-content:center;
    >button{
        cursor: pointer;
        background-color: #9cb4de;
        margin: 4px;
        border: 4px outset #9cb4de;
    }
    >button:hover{
        color: white;
    }
    >button:active{
        border: 4px inset #528bc5;
        color: white;
        background-color: #528bc5;
    }
`;

export const NoPokDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
>img{
    margin-top: 30%;
    margin-bottom: 30px;
    width: 55%;
}
`