import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, InputGroup, FormControl, Modal, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import Timer from './components/Timer'
function Home() {

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)
  const [question, setQuestion] = useState()
  const [show, setShow] = useState(false);
  const [showf, setShowf] = useState(false);

  var elem = document.documentElement;

  useEffect(()=>{
    
    axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean')
  .then(function (response) {
    // handle success
    console.log(response.data.results);
    setData(response.data.results)
    data.map((question)=> console.log(question))
    
    setLoading(false)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  document.addEventListener("fullscreenchange",()=>{
    if (document.fullscreenElement) {
      console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
      handleShow()
      console.log('Leaving full-screen mode.');
    }
  })

    window.addEventListener("focus",()=>{
     console.log("left")
     handleShowf()
  })

  window.addEventListener("blur",()=>{
     console.log("aao")
  })

  },[])

  useEffect(()=>{
    if(data.length>1)
    setQuestion(data[0].question)
  },[data])

  
  const handleClosef = () => setShowf(false)
  const handleShowf = () => setShowf(true)
  const handleClose = () => {
    
    setShow(false);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  const handleShow = () => setShow(true);

  const handleQuestion = (e,index) => {
    console.log(index)
    setQuestion(data[index].question)
  }

  const handleEnd = () =>{
    window.location = '/End'
  }

  if(loading){
    return(<div>Loading</div>)
  }

  return (
    <Container>
      <Row>
        <Col><Button className="mt-2" variant="warning" onClick={handleEnd}>End Test</Button></Col>
        <Col><Timer/></Col>
      </Row>
      
      
          <Row className="mt-5">
              <Col sm={4}>
              <ListGroup>
  {data.map((result,index)=> <ListGroup.Item key={index} onClick={(e) => handleQuestion(e,index)}>{index+1}.{result.question}</ListGroup.Item>)}
              </ListGroup>

              </Col>
              <Col className="mt-3">Question) {question}
              <div>
              <InputGroup className="m-5">
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label="Radio button for following text input" />
              </InputGroup.Prepend> True
            </InputGroup>
            <InputGroup className="ml-5">
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label="Radio button for following text input" />
              </InputGroup.Prepend> False
            </InputGroup>
                </div> </Col>
          </Row>


          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Leaving a full screen mode can lead to disqualification. Please return back to full screen mode</Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            Go Back to full screen mode
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showf} onHide={handleClosef}>
        <Modal.Header closeButton>
          <Modal.Title>Warning!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please don't leave this space</Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClosef}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Home;
