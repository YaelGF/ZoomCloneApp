import React from 'react';

const Inputs = ({placeholder, value, changeHandler}) => {
    return (
        <input
            className='join_room_input'
            placeholder={placeholder}
            value={value}
            onChange={changeHandler}
        />
    );
}

const JoinRoomInputs = (props) => {
    const {roomIdValue, setRoomIdValue, nameValue, setNameValue, isRoomHost} = props;

    const handleRoomIdValueChange = (event) => {
        setRoomIdValue(event.target.value);
    };

    const handleNameValueChange = (event) => {
        setNameValue(event.target.value);
    };


    return (
        <div className='join_room_inputs_container'>
            {!isRoomHost && (<Inputs
                placeholder='Enter meeting ID'
                value={roomIdValue}
                changeHandler={handleRoomIdValueChange}
            />)}
            <Inputs
                placeholder='Enter your Name'
                value={nameValue}
                changeHandler={handleNameValueChange}
            />
            <div className='join_room_inputs_button_container'>
                <button className='join_room_inputs_button'>Join Room</button>
            </div>
         </div>
     );
};

export default JoinRoomInputs;