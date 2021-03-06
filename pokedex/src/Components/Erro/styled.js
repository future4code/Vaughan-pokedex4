import styled from "styled-components";
import Background from '../../Media/background.png'

export const BodyErro = styled.div`
    min-height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ErroCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
>p{
    margin: 10px;
}
>img{
    width: 35%;
}
`