import React, {useState, useEffect} from 'react';
import './App.css';
import Rules from "./components/Rules.js"
import Webcams from "./components/Webcam.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
function App() {

  const [permission, setPermission] = useState(false)

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
    console.log("START")
    window.location = '/Home'
  }
  return (
    <div className="App">
      <Rules/>
      <div className="mt-5">
      {permission?(<Button variant="success" size="sm" disabled>Access Given To start camera</Button>):(<Button variant="danger" size="sm" disabled>Please give the permission to start camera</Button>)}
      </div>
      {permission?(<Button className="mt-5" variant="info" onClick={handleStart}>START TEST</Button>):(<Button className="mt-5" variant="info" onClick={handleStart} disabled>START TEST</Button>)}
      <Webcams/>
    </div>
  );
}

export default App;
