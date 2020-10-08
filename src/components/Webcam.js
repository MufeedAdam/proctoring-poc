import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Webcam from "react-webcam";
import { Container, ListGroup } from 'react-bootstrap';
import '../App.css';
function Webcams(props) {

    const videoConstraints = {
       
        facingMode: "user"
      };
       
  return (
  <div><Webcam className="webpos"
  audio={false}
  height={220}
  //ref={webcamRef}
  width={220}
  videoConstraints={videoConstraints}/></div>
  );
}

export default Webcams;
