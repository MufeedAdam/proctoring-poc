import React, {useState, useEffect} from 'react';
import './App.css';
import Rules from "./components/Rules.js"
import Webcams from "./components/Webcam.js"
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
function App() {

  var elem = document.documentElement;
  const [permission, setPermission] = useState(false)
  const [start,setStart] = useState(true)

  useEffect(()=>{

    navigator.mediaDevices.getUserMedia({video: true})
    .then(function(stream) {
      console.log(stream)
      setPermission(true)
    })
    .catch(function(err) {
      /* handle the error */
      console.log(err)
      setPermission(false)
    });

  },[permission])

  const handleStart = () =>{
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
    console.log("START")
    setStart(false)
    //window.location = '/Home'
  }
  return (

    
    <div className="App">
      {start?(<div><Rules/>
      <div className="mt-5">
      {permission?(<Button variant="success" size="sm" disabled>Access Given To start camera</Button>):(<Button variant="danger" size="sm" disabled>Please give the permission to start camera</Button>)}
      </div>
      {permission?(<Button className="mt-5" variant="info" onClick={handleStart}>START TEST</Button>):(<Button className="mt-5" variant="info" onClick={handleStart} disabled>START TEST</Button>)}
      </div>):(<div><Home/></div>)}
      <Webcams/>
    </div>
  );
}

export default App;
