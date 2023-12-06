import React from 'react';
import ConnectingButton from './ConnectingButton';
import { useHistory } from 'react-router-dom'; 


const ConnectingButtons = () => {

    let history = useHistory();

    const pushToJoinRoomPage = () => {
        history.push('/join');
    }

    const pushToJoinRoomPageAsHost = () => {
        history.push('/join?host=true');
    }

    

    return (
        <div className='connecting_buttons_container'>
            <ConnectingButton buttonText="Entrar a una sala" onClickHandler={pushToJoinRoomPage} />
            <ConnectingButton createRoomButton buttonText="Crear una sala" onClickHandler={pushToJoinRoomPageAsHost} />
         </div>
     );
};

export default ConnectingButtons;