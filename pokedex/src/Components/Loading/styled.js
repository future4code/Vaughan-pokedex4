import styled from "styled-components";
import Background from '../../Media/background.png'

export const LoadingBody = styled.div`
    margin-top: -15px;
    min-height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadingCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
>h2{
    margin-bottom: -40px;
}
>img{
    width: 30%;
}
`