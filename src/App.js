
import './App.css';
import Navbar from './components/navbar/navbar';
import ImageTitle from './components/imageTitle/imageTitle.jsx'
import canvas from './img/WhatsApp Image 2022-06-30 at 16.03.46.jpeg'
import ImageSlider from './components/imageSlider/imageSlider.jsx';
import PositivePoints from './components/positivePoints/positivePoints.jsx'
import Form from './components/form/form.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'



function App() {
  return (
    <div className="app">
      {/* <Navbar/> */}
      <ImageTitle />
      <ImageSlider />
      <div className="queary-div">
        <h1><button className="queary-div-button">לחצי כאן</button> אם  את מעוניינת לנסות את המוצר </h1> 
      </div>
      <PositivePoints/>
      <br/>
      <Form/>
      <br/>
      <div className="social-links">
        <div><FontAwesomeIcon className="fa-3x" icon={faWhatsapp} style={{color: 'white'}}></FontAwesomeIcon></div>
        <div><FontAwesomeIcon className="fa-3x" icon={faInstagram} style={{color: 'white'}}></FontAwesomeIcon></div>
        <div><FontAwesomeIcon className="fa-3x" icon={faFacebookF} style={{color: 'white'}}></FontAwesomeIcon></div>
      </div>
      <div className="social-links">
        <h3 style={{fontWeight: 'bold'}}>developed in 2022 by: Eli Frenkin </h3 >
      </div>
      
    </div>
  );
}

export default App;
