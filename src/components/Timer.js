import React from 'react';
import { Container } from 'react-bootstrap';
import ReactTimerStopwatch from 'react-stopwatch-timer';
import '../App.css'
const Timer = () => {
    const fromTime = new Date(0, 0, 0, 0, 10, 0, 0);
    
    return (
        <Container style={{height:'50px'}}>
                <ReactTimerStopwatch isOn={true}  watchType="timer" fromTime={fromTime} />
        </Container>
        
    );
};
 
export default Timer;