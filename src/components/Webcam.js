import React, {useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Webcam from "react-webcam";
import * as faceapi from 'face-api.js'
import { Container, ListGroup } from 'react-bootstrap';
import '../App.css';
function Webcams(props) {

  const webcamRef = useRef()
  const [initialize, setInitialize] = useState(false)
  useEffect(()=>{
    const loadModels = async () =>{
      const MODEL_URL = process.env.PUBLIC_URL + './models';

      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
      ]).then(startVideo())
    }
    loadModels()

  },[])

  const startVideo = () =>{
    navigator.mediaDevices.getUserMedia({video:true})
.then(function(stream) {
  webcamRef.current.srcObject= stream
})
.catch(function(err) {
  /* handle the error */
  console.log(err)
});
  }

  const handlePlay = () =>{
    console.log("playing")
    setInterval(async () =>{
      const detection = await faceapi.detectAllFaces(webcamRef.current, new faceapi.TinyFaceDetectorOptions).withFaceLandmarks().withFaceExpressions();
      const date = new Date()
      console.log(webcamRef.toString())
      var video = document.getElementById("video");
	  	var canvas = document.getElementById("cv");
      // canvas.getContext("2d").drawImage(video, 0, 0, 300, 300);
      // var img = canvas.toDataURL("image/png");
      // console.log(img)
      if(detection.length<1){
        console.log(date,"Please Stay inside")
      }  
      else{
        console.log(date,detection)
      }
      
    },5000)
  }

    const videoConstraints = {
       
        facingMode: "user"
      };
       
    

  return (
  <div>
    <video className="webpos" id="video" height="300" width="300"  ref={webcamRef} autoPlay muted onPlay={handlePlay}/>
    <canvas style={{visibility:"hidden"}}  width="300" height="300" id="cv"/>
    </div>
  );
}

export default Webcams;
