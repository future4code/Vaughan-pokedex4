import styled from "styled-components";
import Background from '../../Media/background.png'

export const Card = styled.div`
    margin-top: -15px;
    min-height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width:40%;
    height: 70vh;
    padding: 15px;
    margin: 10px;
    text-align:center;
    border: 5px outset #dee6ee;
    background-color:#dee6ee;    
`
export const CardHeader = styled.div`
    >h1{
        padding-bottom: 5px;
        border-bottom: 3px solid black;
    }
    >p{
        margin-top: 15px;
    }

`
export const PokeImage = styled.div`
    width: 90%;    
    border: #bdcde6 inset 5px;
    margin: 0;
    margin: 15px;
    overflow: hidden;
    transform: translate(-50%, 0, 0);
`
export const ImageSlider = styled.div`
    white-space: nowrap;
    animation: slide 16s infinite;
    @keyframes slide{
    0%{
        transform: translateX(0);
    }
    25%{
        transform: translatex(0);
    }
    50%{
        transform: translateX(-100%);
    }
    75%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(0);
    }
}
    >img{
        width: 100%;        
        display: inline-block;
        background-color: #bdcde6;
    }
`
export const CardText = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width:25%;
height: 60vh;
`
export const CardDetails = styled.div`
    min-height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 5px outset #dee6ee;
    background-color:#dee6ee;
    margin: 10px;
    padding: 20px;
`
export const CardSkills = styled.div`
    min-height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 5px outset #dee6ee;
    background-color:#dee6ee;
    margin: 10px;
    padding: 20px;
`