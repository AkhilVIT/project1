import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container,Row,Col} from 'react-bootstrap';
import mypic from './pro.jpg'
import img1 from './images/cycle.svg'
import img2 from './images/music.svg'
import img3 from './images/kickboxer-silhouette.svg'
import img4 from './images/joystick.svg'
import img5 from './images/Ruby-Unicorn.svg'
import img6 from './images/1515585623.svg'
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import './App.css';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div >
    <Navbar style={{ backgroundColor:"#2d3e50",padding:"10px 40px",position:"sticky",top:"0",zIndex:"1"}}  expand="md">
        <Navbar.Brand href="#home" style={{color:"white",fontWeight:"700"}}>CODINZA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
            <Nav className="ml-auto">
            <Nav.Link href="#port" style={{color:"white",margin:"0 10px"}}>PORTFOLIO</Nav.Link>
            <Nav.Link href="#about" style={{color:"white",margin:"0 10px"}}>ABOUT</Nav.Link>
            <Nav.Link href="#contact" style={{color:"white",margin:"0 10px"}}>CONTACT</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    <div className="container-fluid mt-auto " style={{ placeContent:"center",placeItems:"center", textAlign:"center",paddingTop:"12%",paddingBottom:"8%",backgroundColor:"#1bbc9b",color:"white"}}>
        <img src= {mypic} style={{ height:"180px" , width:"180px" , borderRadius:"50%"}} alt="pic"/>  <br/>  <br/>
        <h1 style={{ fontWeight:"700"}}>AKHIL MURIKIPUDI</h1>
      
        <div style={{ display:"flex" ,fontSize:"28px",width:"200px",placeItems:"center",margin:"0 auto"}}>
            <hr style={{ border:"1px solid white", width:"80px"}}/>
            <span>&#9734;</span>
            <hr style={{ border:"1px solid white", width:"80px"}}/>
        </div>
        <p style={{margin:"5px 0"}}>
            Graphic Artist - Web Designer - Full Stack Developer
        </p>
    </div>
    <div id = "port" className="jumbotron-fluid" style={{textAlign:"center", color:"#212121",padding:'8% 0'}}>
        <h1>PORTFOLIO</h1>
        <div style={{ display:"flex" ,fontSize:"28px",width:"200px",placeItems:"center",margin:"0 auto"}}>
            <hr style={{ border:"1px solid #212121", width:"80px"}}/>
            <span>&#9734;</span>
            <hr style={{ border:"1px solid #212121", width:"80px"}}/>
        </div>
        <br/>
        <Container>
        <Row>
            <Col xs={12} md={4} sm={12} className="m1">
            <span className="imgspin1" style={{background:"teal",padding:"20%",borderRadius:"50%"}}>
            <img src={img1} style = {{ height:"160px", width:"160px",background:"springgreen",padding:"20px",borderRadius:"50%"}} alt=""/>
            </span>
            </Col>
            

            <Col xs={12} md={4} sm={12} className="m1">
            <span className="imgspin2" style={{background:"teal",padding:"20%",borderRadius:"50%"}}>
            <img src={img6} style = {{ height:"160px", width:"160px",padding:"20px"}} alt=""/>
            </span>           
            </Col>
            

            <Col xs={12} md={4} sm={12} className="m1">
            <span className="imgspin1" style={{background:"teal",padding:"20%",borderRadius:"50%"}}>
            <img src={img2} style = {{ height:"160px", width:"160px",background:"hotpink",padding:"20px",borderRadius:"50%"}} alt=""/>
            </span>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col xs={12} md={4}  sm={12} className="m1">
            <span className="imgspin1" style={{background:"teal",padding:"20%",borderRadius:"50%"}}>
            <img src={img4} style = {{ height:"160px", width:"160px",background:"#212121",padding:"20px",borderRadius:"50%"}} alt=""/>
            </span>
            </Col>
            
            <Col xs={12} md={4} sm={12} className="m1">
            <span className="imgspin2" style={{background:"dimgrey",padding:"20%",borderRadius:"50%"}}>
            <img src={img3}  style = {{ height:"160px", width:"160px",padding:"20px"}} alt=""/>
            </span>
            </Col>
            <Col xs={12} md={4}  sm={12} className="m1">
            <span className="imgspin1" style={{background:"teal",padding:"20%",borderRadius:"50%"}}>
            <img src={img5} style = {{ height:"160px", width:"160px",background:"black",padding:"20px",borderRadius:"50%"}} alt=""/>
            </span>
            </Col>
        </Row>
        </Container>
    </div>
    <div id="about" className="container-fluid mt-auto " style={{ placeContent:"center",placeItems:"center" ,padding:"5% 15% 5% 15%" ,backgroundColor:"#1bbc9b",color:"white"}}>
        <h1 style={{ fontWeight:"700",textAlign:"center"}}>ABOUT</h1>
      
        <div style={{ display:"flex" ,fontSize:"28px",width:"200px",placeItems:"center",margin:"0 auto"}}>
            <hr style={{ border:"1px solid white", width:"80px"}}/>
            <span>&#9734;</span>
            <hr style={{ border:"1px solid white", width:"80px"}}/>
        </div>
        <br/>
        <Row>
            <Col xs={12} md={6} sm={6} style={{margin:"3px 0"}} >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum vel laudantium illum vero fugiat quo, ut magnam dignissimos, commodi odio ducimus error nemo quasi ipsum, consequuntur labore optio. Adipisci, excepturi.
            </Col>
    
            <Col xs={12} md={6} sm={6} style={{margin:"3px 0"}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque perferendis placeat labore alias? Totam numquam quas in minus? Dignissimos in distinctio nesciunt rerum sunt accusamus ab sed animi iure velit.
            </Col>

        </Row>
    </div>
    <div id = "contact" className="container" style={{padding:"10% 0"}}>
    <h1 style={{textAlign:"center",fontWeight:"700"}}>CONTACT ME</h1>
        <div style={{ display:"flex" ,fontSize:"28px",width:"200px",placeItems:"center",margin:"0 auto"}}>
            <hr style={{ border:"1px solid #212121", width:"80px"}}/>
            <span>&#9734;</span>
            <hr style={{ border:"1px solid #212121", width:"80px"}}/>
        </div>
        <br/>
    <form className={classes.root} noValidate autoComplete="off" style={{display:"grid" ,placeContent:"center"}}> 
      <TextField id="standard-basic" label="Name"  />
      <br/>
      <TextField id="standard-basic" label="Email" />
      <br/>
      <TextField id="standard-basic" label="Phone Number" />
      <br/>
      <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          placeholder="Message"
          variant="outlined"
        />
        <br/>
        <Button variant="text" style={{background:"#1bbc9b"}}>
          Send
        </Button>
    </form>
    </div>
    <footer className="container-fluid" style={{background:"#2d3e50",color:"white",placeContent:"center",textAlign:"center"}}>
        <Row style={{padding:"30px"}}>
            <Col xs={12} sm={12} md={4}><h3>Location</h3><p>Banglore</p><p>560035</p></Col>
            <Col xs={12} sm={12} md={4}><h3 className="m2">AROUND THE WEB</h3>
            <span style={{display:"flex",placeContent:"center"}}>
                <FacebookIcon style={{fontSize:"40px",margin:"5px"}}/>
                <TwitterIcon style={{fontSize:"40px",margin:"5px"}}/>
                <LinkedInIcon style={{fontSize:"40px",margin:"5px"}}/>
                <InstagramIcon style={{fontSize:"40px",margin:"5px"}}/>
            </span>
            </Col>
            <Col xs={12} sm={12} md={4}><h3 className="m2">ABOUT ME</h3><p>I am a part of Full Stack WEB developer course.</p></Col>
        </Row>
        <Row style={{ background:"#1b252f",padding:"15px",placeContent:"center"}}>
            Copyright&#xA9; This Website 2020.
        </Row>

    </footer>
    </div>
    </div>
  );
}

export default App;
