
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
      
      <div className="social-links">
        <div><a href="https://api.whatsapp.com/send?phone=508105610&text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%A0%D7%AA"><FontAwesomeIcon className="fa-3x" icon={faWhatsapp} style={{color: 'white'}}></FontAwesomeIcon></a></div>
        <div><a href="https://www.instagram.com/alle.artbynature/"><FontAwesomeIcon className="fa-3x" icon={faInstagram} style={{color: 'white'}}></FontAwesomeIcon></a></div>
        <div><FontAwesomeIcon className="fa-3x" icon={faFacebookF} style={{color: 'white'}}></FontAwesomeIcon></div>
      </div>
      <hr />
      <div className="social-links">
        <h4 style={{ fontFamily:'initial'}}>developed in 2022 by: Eli Frenkin </h4 >
      </div>
      
    </div>
  );
}

export default App;
