import { useState, useRef } from "react"

import Aside from "./components/Aside"
import Main from "./components/Main"
import Nav from "./components/Nav"
import WelcomeScreenMain from "./components/WelcomeScreenMain"
import WelcomeScreen from "./components/WelcomeScreen"
import EmailMain from "./components/EmailMain"
import Email from "./components/Email"
import Home from "./components/Home"

import HeroImage from "./assets/hero.png"

function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const showWelcomeHandle = () => {
    setShowWelcome(prevShowWelcome => !prevShowWelcome);
  }

  const [showEmail, setShowEmail] = useState(false);
  const showEmailHandle = () => {
    setShowEmail(prevShowEmail => !prevShowEmail);
  }

  const [welcomeDetails, setWelcomeDetails] = useState({
    title: "Welcome to our form",
    description: "This is the description",
    button: "Start"
  });
  const handleWelcomeDetails = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setWelcomeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const [emailDetails, setEmailDetails] = useState({
    title: "Enter your email",
    description: "Description (optional)"
  });
  const handleEmailDetails = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setEmailDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const [image, setImage] = useState(HeroImage);
  const fileInputRef = useRef(null);
  const handleImageChange = (e) => {
    console.log(image)
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const removeImage = (e) => {
    e.preventDefault();
    setImage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const [placement, setPlacement] = useState(false);
  const handlePlacement = (e) => {
    e.preventDefault();
    setPlacement(prevPlacement => !prevPlacement);
  }

  const [required, setRequired] = useState(false);
  const handleRequired = (e) => {
    e.preventDefault();
    setRequired(prevRequired => !prevRequired);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="sm:flex">
      <Aside>
        <Nav showWelcome={showWelcome} showWelcomeHandle={showWelcomeHandle} showEmail={showEmail} showEmailHandle={showEmailHandle} />
        {showWelcome && <WelcomeScreen showWelcomeHandle={showWelcomeHandle} welcomeDetails={welcomeDetails} handleWelcomeDetails={handleWelcomeDetails} image={image} handleImageChange={handleImageChange} removeImage={removeImage} placement={placement} handlePlacement={handlePlacement} handleSubmit={handleSubmit} />}
        {showEmail && <Email showEmailHandle={showEmailHandle} emailDetails={emailDetails} handleEmailDetails={handleEmailDetails} required={required} handleRequired={handleRequired} handleSubmit={handleSubmit} />}
      </Aside>
      <Main>
        <Home showWelcome={showWelcome} showEmail={showEmail} welcomeDetails={welcomeDetails} image={image} placement={placement} />
        {showWelcome && <WelcomeScreenMain welcomeDetails={welcomeDetails} image={image} placement={placement} />}
        {showEmail && <EmailMain emailDetails={emailDetails} required={required} />}
      </Main>
    </div>
  )
}

export default App
