import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import axios from "axios";
import { useSpring ,animated} from 'react-spring';
import "animate.css";

export default function Rout() {
  return (
    <Router>
      <div>
    <nav>
      <Navbar bg="dark" variant="dark" className="nav">
        <Container>
        <li className="fon" >
          <Link style={{padding:"25px",color:"white"}} to="/">Home</Link>
          <Link style={{padding:"25px",color:"white"}} to="/info">Info</Link>
          <Link style={{padding:"25px",color:"white"}} to="/contact">Contact</Link>
          <Link style={{padding:"25px",color:"white"}} to="/game">Gamewithquotes</Link>
        </li>
        </Container>
      </Navbar>
    </nav>
    <Routes>
          			<Route path="/game" element={<Game/>} />
          			<Route path="/contact" element={<Contact />} />
          			<Route path="/info" element={<Info />} />
          			<Route path="/" element={<Home />} />
        		</Routes>
   </div>
    </Router>
  );
}


const copyToClipboard = (text) => {
  const elem = document.createElement("textarea");
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}
function Home() {
  const [quote, setQuote] = useState([]);
  const [copy,setCopy]=useState("Copy Quote")
  const [count,setCount]=useState(0);
  const [trophies, setTrophies] = useState([]);
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(`https://api.quotable.io/random`);
      const data = await response.json();
      setQuote(data);
    };
    fetchQuote();
  }, []);

  
const getNewQuote = async () => {
  const response = await fetch(`https://api.quotable.io/random`);
  const data = await response.json();
  setQuote(data);
  setCopy("copy Quote")
}
const quoteKey = new Date().getTime();
  const authorKey = Math.random().toString(36).substring(2, 15);

const handleCopyClick =async () => {
  if (quote) {
      copyToClipboard(`${quote.content} - ${quote.author}`);
      setCopy("Quote Copied");
      setCount(count);
      setCount(prevCount => prevCount + 1);
    if ((count + 1) % 15 === 0) {
      setTrophies(prevTrophies => [...prevTrophies, <img style={{width:"50px",height:"50px"}} src="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-golden-red-ribbon-badge-illustration-image_2286597.jpg" alt="" />]);
    }
    }
  };

  return(
       <animated.div style={props}>
      {quote.content && (
        <animated.div style={props}>
        <h2>Enhance your day with quotes</h2>
        <br/>
            <h3 className="animate__animated animate__bounce">
              <FormatQuoteIcon/>
            <h3 key={quoteKey}  className="animate__animated animate__bounce">{quote.content}</h3>
             <FormatQuoteIcon/>
            </h3>
          <i key={authorKey} className="animate__animated animate__fadeIn" >- {quote.author}</i>
          <br/>
          <br/>
<button className="but"  style={{height:"50px",width:"150px"}} onClick={handleCopyClick}><b>{copy} </b><b >Quotes Added:{count}</b></button>
<button  style={{height:"50px",width:"150px",fontSize:"20px",backgroundColor:"powderblue"}} onClick={getNewQuote}>New Quote</button>
<br/>
<h5>Batches earned</h5>
<div>
 {trophies}
      </div>
      </animated.div>
      )}
      </animated.div>
      );
      }

function Contact() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
  <h3 >
    <animated.div style={props}>
    <FavoriteIcon/>
   <h1>We are here to make your every day wonderful</h1>
    <FavoriteIcon/>
    <br/>
    <h3>Follow us for more updates on</h3>
    <br/>
    </animated.div>
<animated.div style={props}>
    <EmailIcon/>
<GoogleIcon/>
<PinterestIcon/>
<br/>
Link us through
<br/>
<a href="//www.https:facebook.com/">
<FacebookIcon/>
</a>
<a href="https://www.instagram.com/">
<InstagramIcon/>
</a>
<a href="https://twitter.com/">
<TwitterIcon/>
</a>
</animated.div>
</h3>
);
}


function Info() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (<h5>
    <animated.div style={props}>
    <SelfImprovementIcon/>
    </animated.div>
    <br/>
    <animated.div style={props}>
    <AddReactionIcon/>
     It's an immense pleasure to help generate ideas within brainstorming, which can influence the ideas within the piece.
     <br/>
     Fill your thoughts with positivity with quotes everyday
     <br/>
     Start your day Energetic and Refreshing
     <AddReactionIcon/>
    </animated.div>
     <br/>
     <img style={{width:"200px",height:"200px"}} src="https://www.shutterstock.com/shutterstock/photos/1652863819/display_1500/stock-vector-cute-girl-with-heart-shaped-long-hair-self-care-love-yourself-icon-or-body-positive-concept-1652863819.jpg" alt=""></img>
  </h5>)
  ;
}

function Game()
{
  const [quote, setQuote] = useState("");
  const [number, setNumber] = useState(1);

  const quoteKey = new Date().getTime();

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const fetchQuote = async () => {
    const response = await axios.get(
      `https://api.quotable.io/random?language=en`
    );

    setQuote(response.data.content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchQuote();
  };

  return (
    <animated.div style={props}>
      <form onSubmit={handleSubmit}>
        <label>
          <h1 >Find your quote with random numbers</h1>
          <br/>
          <br/>
          <h3>Enter a number between 1-100:</h3>
          <br/>
          <br/>
          <input style={{width:"150px",height:"45px"}}
            type="number"
            min="1"
            max="100"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <br/>
        <br/>
        <br/>
        <br/>
        <button style={{width:"100px",height:"50px"}} type="submit">Get Quote</button>
      </form>
      <h3  key={quoteKey} className="animate__animated animate__bounce">{quote}</h3>
    </animated.div>
    );
}
