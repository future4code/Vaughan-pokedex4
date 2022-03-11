import React from "react";
import { LoadingBody, LoadingCard } from "./styled";

const Loading = () => {
    return <LoadingBody>
        <LoadingCard>
            <img src="https://media.giphy.com/media/IQebREsGFRXmo/giphy.gif" alt="Carregando"/>
            <p>Carregando</p>
        </LoadingCard>
    </LoadingBody>
}

export default Loading