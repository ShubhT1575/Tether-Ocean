import React, { useEffect, useState } from "react";
import "./css/Home.css";
import "./css/style.css";
import "./css/responsive.css";
import "./css/default.css";
import Header from "./Header";
import bg1 from './images/8.png'
import bg2 from './images/7.png'
import bg3 from './images/10.png'
import bg4 from './images/9.png'
import { Link } from "react-router-dom";



function Homepage() {
  const [fullheight, setFullHeight] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showModal, setShowModal] = useState(true);
  const apkURL = `${window.location.origin}/apk/app-release (1).apk`;

  useEffect(() => {
    const calculateTimeLeft = () => {
      try {
        const targetDate = new Date('April 10, 2025 11:00:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
          });
        } else {
          setShowModal(false);
        }
      } catch (error) {
        console.error("Error in countdown calculation:", error);
        setShowModal(false);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div id="top" style={{ overflow: "hidden" }} >
          {/* Modal Popup */}
          {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(5px)'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            padding: '30px',
            borderRadius: '15px',
            maxWidth: '600px',
            width: '90%',
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center',
            position: 'relative'
          }}>
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '5px',
                right: '15px',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
            
            <h2 style={{
              color: '#ff5183',
              fontSize: '2rem',
              marginBottom: '20px',
              fontWeight: 'bold'
            }}>
             We are Live Now! 🚀
            </h2>
            {/* <p style={{
              color: '#fff',
              fontSize: '1.1rem',
              marginBottom: '30px',
              lineHeight: '1.6'
            }}>
              We're working on something amazing for you! Mark your calendar for April 9, 2025 at 11 AM.
            </p> */}
            
            {/* <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              flexWrap: 'wrap',
              marginBottom: '30px'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '15px',
                borderRadius: '10px',
                minWidth: '80px'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#6e00ff' }}>{timeLeft.days}</div>
                <div style={{ fontSize: '0.9rem', color: '#aaa' }}>DAYS</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '15px',
                borderRadius: '10px',
                minWidth: '80px'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#6e00ff' }}>{timeLeft.hours}</div>
                <div style={{ fontSize: '0.9rem', color: '#aaa' }}>HOURS</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '15px',
                borderRadius: '10px',
                minWidth: '80px'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#6e00ff' }}>{timeLeft.minutes}</div>
                <div style={{ fontSize: '0.9rem', color: '#aaa' }}>MINUTES</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '15px',
                borderRadius: '10px',
                minWidth: '80px'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#6e00ff' }}>{timeLeft.seconds}</div>
                <div style={{ fontSize: '0.9rem', color: '#aaa' }}>SECONDS</div>
              </div>
            </div> */}
            
            {/* <button 
              onClick={closeModal}
              style={{
                background: 'linear-gradient(90deg, #ff5183, #6e00ff)',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ':hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 5px 15px rgba(110, 0, 255, 0.4)'
                }
              }}
            >
              Got It! I'm Excited
            </button> */}
          </div>
        </div>
      )}
      <Header />


      {/* STAR ANIMATION */}
      <div className="bg-animation">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div id="stars4" />
      </div>


      {/* / Top Section */}
      <div className="midd-container landing-bg"
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundSize: "contain",
          // backgroundRepeat: "no-repeat",
          position: "relative",
        }}>
        <div className="coinpool-layout">
          <div className="container">
            <div className="row align-items-center hero-container">
              <div className="col-sm-12 col-md-6 mobile-center">
                <h1 className="hero-title">
                  <span style={{ color: '#ff5183' }}>Blockchain</span>-Powered Ecosystem of the <span>Future!</span>
                </h1>
                <p className="lead text-light">
                  Revolutionizing the way we interact with digital assets through blockchain technology—secure, transparent, and decentralized.
                </p>
                <div className="apk-div py-3 text-start">
                  <div className="d-flex align-items-end mb-3 loginbtns">

                    <Link to={'/SignIn'}>
                      <button className="loginbtn">
                        Login
                        <div className="icon-1">
                          <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 26.3 65.33" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g id="Layer_x0020_1">
                              <metadata id="CorelCorpID_0Corel-Layer" />
                              <path d="M13.98 52.87c0.37,-0.8 0.6,-1.74 0.67,-2.74 1.01,1.1 2.23,2.68 1.24,3.87 -0.22,0.26 -0.41,0.61 -0.59,0.97 -2.95,5.89 3.44,10.87 2.98,0.78 0.29,0.23 0.73,0.82 1.03,1.18 0.33,0.4 0.7,0.77 1,1.15 0.29,0.64 -0.09,2.68 1.77,4.91 5.42,6.5 5.67,-2.38 0.47,-4.62 -0.41,-0.18 -0.95,-0.26 -1.28,-0.54 -0.5,-0.41 -1.23,-1.37 -1.66,-1.9 0.03,-0.43 -0.17,-0.13 0.11,-0.33 4.98,1.72 8.4,-1.04 2.38,-3.16 -1.98,-0.7 -2.9,-0.36 -4.72,0.16 -0.63,-0.58 -2.38,-3.82 -2.82,-4.76 1.21,0.56 1.72,1.17 3.47,1.3 6.5,0.5 2.31,-4.21 -2.07,-4.04 -1.12,0.04 -1.62,0.37 -2.49,0.62l-1.25 -3.11c0.03,-0.26 0.01,-0.18 0.1,-0.28 1.35,0.86 1.43,1 3.25,1.45 2.35,0.15 3.91,-0.15 1.75,-2.4 -1.22,-1.27 -2.43,-2.04 -4.22,-2.23l-2.08 0.13c-0.35,-0.58 -0.99,-2.59 -1.12,-3.3l-0.01 -0.01 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0c-0.24,-0.36 1.88,1.31 2.58,1.57 1.32,0.49 2.6,0.33 3.82,0 -0.37,-1.08 -1.17,-2.31 -2.13,-3.11 -1.79,-1.51 -3.07,-1.41 -5.22,-1.38l-0.93 -4.07c0.41,-0.57 1.41,0.9 2.82,1.36 0.96,0.31 1.94,0.41 3,0.14 2,-0.52 -2.25,-4.4 -4.53,-4.71 -0.7,-0.1 -1.23,-0.04 -1.92,-0.03 -0.46,-0.82 -0.68,-3.61 -0.92,-4.74 0.8,0.88 1.15,1.54 2.25,2.23 0.8,0.5 1.58,0.78 2.57,0.85 2.54,0.18 -0.1,-3.47 -0.87,-4.24 -1.05,-1.05 -2.34,-1.59 -4.32,-1.78l-0.33 -3.49c0.83,0.67 1.15,1.48 2.3,2.16 1.07,0.63 2.02,0.89 3.58,0.79 0.15,-1.34 -1.07,-3.39 -2.03,-4.3 -1.05,-0.99 -2.08,-1.47 -3.91,-1.68l-0.07 -3.27 0.32 -0.65c0.44,0.88 1.4,1.74 2.24,2.22 0.69,0.39 2.4,1.1 3.44,0.67 0.31,-1.92 -1.84,-4.49 -3.5,-5.29 -0.81,-0.39 -1.61,-0.41 -2.18,-0.68 -0.12,-1.28 0.27,-3.23 0.37,-4.55l-0.89 0c-0.06,1.28 -0.35,3.12 -0.34,4.31 -0.44,0.45 -0.37,0.42 -0.96,0.64 -3.88,1.49 -4.86,6.38 -3.65,7.34 1.42,-0.31 3.69,-2.14 4.16,-3.66 0.23,0.5 0.1,2.36 0.05,3.05 -1.23,0.4 -2.19,1.05 -2.92,1.82 -1.17,1.24 -2.36,4.04 -1.42,5.69 1.52,0.09 4.07,-2.49 4.49,-4.07l0.29 3.18c-2.81,0.96 -5.01,3.68 -4.18,7.43 2.06,-0.09 3.78,-2.56 4.66,-4.15 0.23,1.45 0.67,3.06 0.74,4.52 -1.26,0.93 -2.37,1.8 -2.97,3.55 -0.48,1.4 -0.49,3.72 0.19,4.55 0.59,0.71 2.06,-1.17 2.42,-1.67 1,-1.35 0.81,-1.92 1.29,-2.46l0.7 3.44c-0.49,0.45 -0.94,0.55 -1.5,1.19 -1.93,2.23 -2.14,4.33 -1.01,6.92 0.72,0.09 2.04,-1.4 2.49,-2.06 0.65,-0.95 0.79,-1.68 1.14,-2.88l0.97 2.92c-0.2,0.55 -1.84,1.32 -2.6,3.62 -0.54,1.62 -0.37,3.86 0.67,4.93 0.58,-0.09 1.85,-1.61 2.2,-2.19 0.66,-1.09 0.66,-1.64 1,-2.93l1.32 3.18c-0.23,0.72 -1.63,1.72 -1.82,4.18 -0.17,2.16 1.11,6.88 3.13,2.46zm-4.09 -16.89l-0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 -0 0.01 0.01z" className="fil0" />
                            </g>
                          </svg>
                        </div>
                        <div className="icon-2">
                          <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.67 37.63" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g id="Layer_x0020_1">
                              <metadata id="CorelCorpID_0Corel-Layer" />
                              <path d="M7.63 35.26c-0.02,0.13 0.01,0.05 -0.06,0.14 -0,0 -0.08,0.07 -0.11,0.1 -0.42,0.25 -0.55,0.94 -0.23,1.4 0.68,0.95 2.66,0.91 3.75,0.21 0.2,-0.13 0.47,-0.3 0.57,-0.49 0.09,-0.02 0.04,0.03 0.11,-0.07l-1.35 -1.24c-0.78,-0.78 -1.25,-1.9 -2.07,-0.62 -0.11,0.18 -0.06,0.16 -0.22,0.26 -0.4,-0.72 -0.95,-1.79 -1.26,-2.59 0.82,0.02 1.57,-0.12 2.16,-0.45 0.49,-0.27 1.15,-0.89 1.33,-1.4 0.1,-0.06 0.02,0.01 0.06,-0.1 -0.24,-0.16 -0.87,-0.37 -1.19,-0.52 -0.4,-0.19 -0.73,-0.39 -1.09,-0.62 -0.25,-0.16 -0.85,-0.6 -1.18,-0.3 -0.35,0.32 -0.32,0.83 -0.53,1.17 -0.71,-0.3 -0.55,-0.26 -0.84,-1.22 -0.15,-0.5 -0.31,-1.12 -0.41,-1.66l0.03 -0.13c0.56,0.23 1.28,0.37 1.99,0.28 0.56,-0.07 1.33,-0.42 1.62,-0.71l0.1 -0.1c-0.74,-0.68 -1.09,-1.2 -1.65,-1.99 -1.09,-1.52 -1.2,-0.28 -1.92,0.17 -0.26,-0.79 -0.73,0.2 -0.12,-2.76 0.06,-0.3 0.19,-0.7 0.2,-0.98 0.18,0.08 0.01,-0.01 0.11,0.08 0.05,0.05 0.07,0.07 0.1,0.12 0.94,1.17 3.63,0.82 4.21,0.01 0.13,-0.02 0.06,0.03 0.1,-0.1 -1.14,-0.81 -1.91,-2.89 -2.58,-2.67 -0.29,0.09 -0.78,0.63 -0.93,0.87 -0.54,-0.48 -0.36,-0.63 -0.38,-0.81 0.01,-0.01 0.03,-0.04 0.03,-0.03 0.01,0.02 0.36,-0.35 0.45,-0.6 0.13,-0.35 0.04,-0.65 -0.05,-0.95 0.06,-0.41 0.33,-1.33 0.28,-1.71 0.22,-0.05 0.19,0.05 0.45,0.17 0.47,0.23 1.17,0.33 1.7,0.32 0.62,-0 1.74,-0.39 1.94,-0.75 0.14,-0.02 0.05,0.06 0.13,-0.09 -1.05,-1.1 -0.7,-0.64 -1.62,-1.92 -0.58,-0.81 -0.9,-1.27 -1.9,0.12 -0.44,-0.5 -0.64,-0.69 -0.66,-1.24 0.02,-0.31 0.15,-0.36 0.08,-0.73 -0.04,-0.24 -0.14,-0.41 -0.29,-0.59l-0.47 -2.54c0.09,-0.14 -0.09,-0.1 0.2,-0.05 0.06,0.01 0.19,0.05 0.3,0.07 0.54,0.09 1.47,0.01 1.95,-0.15 0.57,-0.19 1.53,-0.8 1.68,-1.18 0.16,-0.07 0.05,0.02 0.15,-0.13 -0.12,-0.15 -0.95,-0.65 -1.15,-0.8 -1.43,-1.08 -2.21,-2.77 -3.16,-0.38 -0.2,-0.1 -0.75,-0.55 -0.83,-0.74 -0.15,-0.35 -0.21,-0.81 -0.37,-1.15l-0.1 -0.25c-0.03,-0.3 -0.44,-1.33 -0.57,-1.64 -0.2,-0.51 -0.47,-1.09 -0.64,-1.6l-0.55 0c0.14,0.42 0.36,0.84 0.53,1.28 0.12,0.3 0.19,0.35 0.06,0.66l-0.21 0.52c-0.01,0.01 -0.01,0.02 -0.02,0.03 -0.06,0.1 -0.03,0.05 -0.06,0.09 -1.44,-1.03 -1.66,-0.73 -2.07,0.46 -0.16,0.46 -0.3,0.93 -0.5,1.36l-0.64 1.28c0.06,0.07 -0,0.03 0.1,0.03 0.05,0.05 0.02,0.03 0.1,0.08l0.49 0.14c0.23,0.05 0.44,0.09 0.66,0.1 0.55,0.04 0.94,-0.06 1.35,-0.19 0.54,-0.18 1.09,-0.44 1.5,-0.82 0.15,-0.14 0.24,-0.3 0.4,-0.41l0.46 1.66c0.03,0.74 -0.09,0.6 0.27,1.21 0.01,0.01 0.01,0.02 0.02,0.03 0.01,0.01 0.01,0.02 0.02,0.04l0.07 0.11c-0.02,0.22 0.19,1.01 0.24,1.29 0.09,0.46 -0.21,0.79 -0.3,1.2 -0.55,-0.23 -1.25,-1.06 -1.66,-0.23 -0.12,0.25 -0.17,0.36 -0.26,0.62 -0.33,1.01 -0.63,1.61 -1.06,2.43l0.12 0.04 0.23 0.11c0.06,0.02 0.17,0.04 0.25,0.06 0.17,0.04 0.34,0.08 0.52,0.09 0.29,0.02 0.93,0.07 1.12,-0.13 0.42,0.01 1.24,-0.49 1.51,-0.71 0.01,0.01 0.03,0 0.04,0.02l0.09 0.06c-0.04,0.29 0.02,0.41 0.03,0.7l-0.05 1.41c-0.06,1.12 -0.29,1.06 -0.76,1.69 -0.08,-0.07 -0.03,-0.01 -0.11,-0.11 -0.03,-0.03 -0.06,-0.08 -0.09,-0.11 -0.2,-0.25 -0.38,-0.54 -0.7,-0.69 -0.7,-0.32 -1.52,1.73 -2.82,2.61 0.04,0.2 -0.01,0.06 0.1,0.11 0.25,0.3 1,0.67 1.5,0.78 0.35,0.08 0.71,0.08 1.09,0.05 0.25,-0.02 0.82,-0.16 0.92,-0.13 -0.16,0.69 -0.35,1.35 -0.52,2.03 -0.25,1 -0.03,0.77 -0.98,1.53 -0.3,-0.31 -0.33,-0.77 -0.77,-1.02 -0.42,-0.25 -0.91,0.35 -1.12,0.55 -0.33,0.32 -0.58,0.6 -0.97,0.89 -0.19,0.14 -0.34,0.26 -0.53,0.4 -0.14,0.11 -0.43,0.29 -0.53,0.4 0.1,0.15 -0.02,0.06 0.15,0.13 0.09,0.22 0.35,0.38 0.54,0.52 0.22,0.16 0.43,0.29 0.69,0.39 0.43,0.17 1.32,0.31 1.87,0.23l0.23 -0.05c0.01,-0 0.03,-0.02 0.04,-0.02 0.01,-0 0.02,-0.01 0.03,-0.02 0.32,0.05 0.52,-0.18 0.79,-0.24l-0.02 0.66c0,0.77 -0.24,0.75 0.16,1.51l0.04 0.07c0,0.01 0.01,0.03 0.02,0.04 -0.05,0.35 0.18,1.03 0.24,1.4 -0.23,0.18 -0.34,0.33 -0.51,0.41 -0.75,-1.17 -0.82,-1.52 -1.92,-0.43 -0.32,0.31 -0.59,0.57 -0.95,0.86 -0.23,0.19 -0.95,0.65 -1.05,0.81l0.13 0.1c0.88,1.15 3.14,1.5 4.1,0.82 0.47,-0.34 0.54,-0.56 0.52,-1.34l0.67 1.84c0.03,0.16 0.06,0.28 0.12,0.42 0.03,0.06 0.05,0.12 0.09,0.17 0.1,0.15 0.03,0.06 0.13,0.14 -0,0.29 0.14,0.22 0.06,0.56 -0.03,0.13 -0.14,0.43 -0.19,0.53 -1.94,-1.27 -1.57,-0.02 -2.28,1.76 -0.16,0.41 -0.37,0.77 -0.53,1.2 0.09,0.08 0.01,0.03 0.15,0.03 0.29,0.33 1.66,0.28 2.36,-0.01 0.48,-0.2 0.96,-0.46 1.3,-0.82 0.15,-0.16 0.16,-0.3 0.38,-0.33 0.14,0.08 0.17,0.19 0.27,0.36zm-3.62 -12.85c0.13,-0.01 0.31,-0.15 0.55,-0.19 -0.01,0.45 0.02,0.74 -0.34,0.45 -0.06,-0.05 -0.09,-0.06 -0.12,-0.09 -0.09,-0.1 -0.04,-0.01 -0.09,-0.17zm1.92 -12.29l-0.04 0.13c-0.07,-0.02 -0.17,-0.02 -0.21,-0.03 -0.27,-0.08 -0.09,0.04 -0.16,-0.16 0.12,-0.08 0.18,-0.23 0.34,-0.35l0.08 0.4zm1.33 3.05l-0.4 0.17c-0,-0.08 -0,-0.15 -0.02,-0.23 -0.02,-0.09 -0.03,-0.07 -0.05,-0.11l0.07 -0.16c0.21,0.11 0.28,0.16 0.4,0.32zm-1.54 6.48l0.16 -0.51c0.17,0.07 0.25,0.14 0.36,0.29l-0.52 0.22zm0.28 10.88l-0.09 -0.38 0.37 0.07c-0.02,0.1 -0.03,0.13 -0.09,0.19 -0.13,0.15 0.01,0.06 -0.19,0.12zm-1.05 -5.97c0.06,0.12 0.16,0.16 0.26,0.23 -0.09,0.14 -0.22,0.18 -0.37,0.21 -0,-0.02 -0.02,-0.27 -0.02,-0.27 0.04,-0.19 -0.06,-0.09 0.13,-0.16zm1.03 -8.01c-0.09,-0.02 -0.15,-0.02 -0.22,-0.07 -0.21,-0.13 -0.08,-0.02 -0.14,-0.18 0.15,-0.05 0.21,-0.15 0.45,-0.24l-0.08 0.48zm0.57 16.58l-0.45 -0c0.02,-0.18 0.12,-0.3 0.26,-0.42l0.18 0.42zm-1.45 -3.7l-0.19 -0.23c-0.06,-0.07 -0.1,-0.13 -0.17,-0.19 -0.24,-0.23 -0.29,-0.14 -0.36,-0.36l0.46 -0.19c0.07,0.14 0.25,0.78 0.26,0.97zm0.37 -23.67l-0.12 -0.57 0.54 0.21c-0.07,0.16 -0.27,0.31 -0.41,0.36zm-1.46 -3.02c-0.07,0.01 -0.19,-0.04 -0.3,-0.06 -0.04,-0.01 -0.14,-0.02 -0.18,-0.03 -0.15,-0.07 -0.06,0.04 -0.14,-0.13 0.11,-0.07 0.2,-0.27 0.37,-0.4 0.13,0.13 0.2,0.43 0.24,0.62z" className="fil0" />
                            </g>
                          </svg>
                        </div>
                        <div className="icon-3">
                          <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.29 76.92" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <g id="Layer_x0020_1">
                              <metadata id="CorelCorpID_0Corel-Layer" />
                              <path d="M19.14 6.58c0.09,0.1 -0.02,0.03 0.17,0.15 0.04,0.03 0.19,0.09 0.27,0.13l0.16 0.02c0.12,0.14 0.02,0.06 0.22,0.18 0.63,0.37 1.81,0.52 2.51,0.53 0.42,-0.26 0.61,-1.58 0.55,-2.27 -0.11,-1.17 -1.02,-3.42 -2.17,-3.76 -0.84,-0.25 -1.19,0.02 -1.4,0.7 -0.03,0.1 -0.05,0.19 -0.09,0.28l-0.18 0.25c-0.18,-0.36 -0.77,-0.97 -1.2,-1.18 -0.64,-0.31 -0.36,-0.26 -0.84,-1.59l-0.75 0c0.2,0.63 0.44,1.27 0.61,1.92 0.17,0.64 0.47,1.46 0.58,2.05 -0.21,0.36 -0.43,0.5 -0.31,1.1 0.11,0.51 0.35,0.71 0.76,0.9 0.13,0.31 0.36,1.33 0.39,1.78 -0.68,0.24 -1.38,0.85 -1.62,1.43 -0.45,-0.47 -0.29,-1.59 -1.59,-1.22 -0.8,0.22 -1.09,0.8 -1.45,1.52 -0.58,1.18 -0.96,2.15 -0.6,3.58 0.04,0.17 0.13,0.4 0.19,0.55 0.11,0.29 0.09,0.34 0.35,0.44 1.74,-0.01 2.96,-0.82 4.13,-1.55 0.22,-0.13 0.65,-0.39 0.79,-0.62 0.74,-1.2 -0.74,-2.14 -1.7,-2.43 -0.01,-0.51 1.07,-0.87 1.7,-0.82 0.21,1.74 0.56,3.5 0.61,5.33 0.05,2.05 0.01,3.68 -0.08,5.71 -1.2,0.52 -0.99,0.65 -1.77,1.46 -0.39,-0.45 -0.22,-1.6 -1.59,-1.18 -0.79,0.24 -0.91,0.63 -1.42,1.55 -0.78,1.41 -0.95,2.66 -0.36,4.15 0.14,0.35 0.06,0.36 0.36,0.37 0.78,-0 1.47,-0.18 2.09,-0.43 0.51,-0.2 1.26,-0.76 1.69,-0.86 -0.18,0.3 -0.34,0.91 -0.48,1.25l-1.54 3.5c-1.75,0.08 -1.26,0.29 -2.27,0.59 0.1,-1.15 0.1,-1.69 -1.1,-1.78 -0.7,-0.05 -1.5,0.65 -1.91,0.96 -1.04,0.82 -1.93,1.81 -1.94,3.77 0.09,0.22 -0.03,0.09 0.18,0.11 0.24,0.36 1.4,0.49 1.94,0.58l0.19 -0.01 0.71 -0.01 0.08 -0.02 1.74 -0.17c0.25,0.04 0.03,-0.07 0.19,0.09l-2.62 4.74c-0.28,0.51 -0.56,1.2 -0.86,1.61 -0.44,-0.02 -0.69,-0.14 -1.18,-0.08 -0.38,0.04 -0.72,0.17 -1.08,0.22 0.1,-0.53 0.78,-1.5 -0.62,-1.96 -0.79,-0.26 -1.74,0.32 -2.33,0.6 -2.12,1.02 -2.81,3.28 -2.36,3.38 0.01,0.01 0.03,0.02 0.03,0.04l0.11 0.1c0.42,0.34 1.16,0.64 1.66,0.79 0.65,0.19 1.73,0.31 2.43,0.38 3,0.28 1.16,-2.8 1.09,-3.14 0.86,0.12 1.3,-0.05 1.81,0.56 -0.08,0.35 -0.53,1.2 -0.71,1.6 -0.74,1.61 -1.24,3.24 -1.73,4.96 -0.92,0.11 -1.11,0.44 -1.77,0.69 0.01,-1.08 0.1,-1.68 -1.14,-1.71 -0.55,-0.01 -0.8,0.17 -1.11,0.41 -1.43,1.08 -2.52,2.24 -2.53,4.15 -0,0.62 0.11,0.48 0.22,0.54 0.63,0.38 1.79,0.44 2.67,0.35 0.47,-0.05 0.97,-0.11 1.43,-0.2l0.98 -0.22c0.38,-0.08 0.14,-0.15 0.26,0.06 -0.08,0.78 -0.66,2.6 -0.56,3.29 -0.13,0.14 -0.07,0.08 -0.17,0.29 -0.06,0.13 -0.08,0.18 -0.12,0.33 -0.07,0.3 -0.02,0.6 -0.03,0.92 -0.09,0.94 -0.17,0.52 -0.78,0.94 -0.32,0.22 -0.57,0.55 -0.86,0.82 -0.29,-0.69 -0.22,-1.44 -1.39,-1.13 -0.93,0.25 -1.93,2.19 -2.03,3.16 -0.06,0.56 0.02,1.84 0.39,2.08 2,0.02 2.64,-0.6 4.08,-1.25l-0.01 0.28c-0.06,0.58 -0.22,2.09 -0.14,2.62 -0.44,0.37 -0.46,1.03 -0.12,1.49 -0.08,3.97 0.16,2.73 -0.77,3.57 -0.24,0.21 -0.37,0.4 -0.62,0.62 -0.36,-0.53 -0.09,-1.43 -1.37,-1.13 -0.98,0.23 -1.92,2.22 -2.06,3.14 -0.07,0.47 -0.07,1.79 0.41,2.09 0.86,0.04 1.94,-0.12 2.51,-0.52l0.16 -0.08c0.6,-0.17 1.39,-0.67 1.84,-0.94 0.12,0.18 0.04,0.07 0.14,0.1 -0.18,0.38 -0.31,0.07 -0.71,0.58 -0.67,0.86 0.33,1.72 0.89,2.31 0.6,0.64 1.71,1.63 2.94,1.88 0.38,-0.11 0.92,-1.2 1.04,-1.69 0.21,-0.86 0.15,-1.53 -0.05,-2.41 -0.22,-0.94 -0.24,-1.38 -1.01,-1.81 -0.93,-0.52 -1.19,0.28 -1.59,0.76 -0.21,-0.33 -0.33,-0.79 -0.58,-1.12 -0.48,-0.62 -0.48,-0.13 -0.5,-1.22 -0.02,-1.09 0.05,-2.25 0.01,-3.32 0.37,0.22 0.89,0.86 1.37,1.21 0.51,0.37 1.05,0.65 1.76,0.82 0.32,-0.02 0.92,-1.21 1.04,-1.68 0.22,-0.87 0.15,-1.53 -0.04,-2.41 -0.19,-0.86 -0.3,-1.41 -0.96,-1.79 -1.06,-0.6 -1.26,0.38 -1.71,0.74 -0.22,-0.8 -0.65,-1.34 -1.19,-1.71l0.5 -4.35 0.38 0.28c0.23,0.25 0.6,0.67 0.87,0.82 0.07,0.1 0.05,0.1 0.19,0.21 0.18,0.23 0.66,0.57 0.92,0.6 0.1,0.13 -0.01,0.03 0.16,0.16 0.08,0.06 0.1,0.07 0.18,0.11 0.14,0.07 0.26,0.1 0.44,0.15l0.45 0.17c0.35,0.08 0.75,-0.74 0.91,-1.05 0.21,-0.4 0.41,-1.07 0.43,-1.57 -0,-0.28 0.04,-0.67 -0.1,-0.85l0.03 -0.17c-0,-0.04 -0.01,-0.13 -0.01,-0.15 -0.05,-0.13 -0.03,-0.1 -0.09,-0.17 0.06,-0.51 -0.25,-1.75 -0.94,-2.22 -1.11,-0.74 -1.37,0.09 -1.86,0.69l-0.12 -0.2c-0.28,-0.56 -0.41,-1.06 -1,-1.45 0.04,-1.21 1.29,-5.03 1.31,-5.65 0.07,0.06 0.05,0.04 0.12,0.13 0.63,0.83 0.41,0.6 1.22,1.38 0.76,0.74 1.67,1.73 2.95,1.92 0.28,0.13 0.55,-0.41 0.69,-0.64 0.21,-0.34 0.36,-0.64 0.47,-1.02 0.36,-1.24 0.14,-3.92 -1.03,-4.6 -1.23,-0.72 -1.67,0.89 -1.75,0.72 -0.01,-0.01 -0.03,0.02 -0.04,0.03 -0.19,-0.33 -0.3,-0.68 -0.49,-1 -0.22,-0.38 -0.47,-0.51 -0.68,-0.79 0.39,-1.04 1.05,-2.29 1.59,-3.3 0.57,-1.06 1.2,-2.15 1.7,-3.17 1.43,-0.02 1.51,0.55 1.8,0.6 -0.1,0.19 -0.02,0.07 -0.16,0.2 -0.01,0.01 -0.21,0.13 -0.23,0.15 -0.8,0.47 -1.8,0.96 -1.37,2.09 0.14,0.37 0.42,0.53 0.75,0.73 1.23,0.73 2.46,1.53 4.32,1.53 0.28,-0.08 0.25,-0.15 0.35,-0.44 0.22,-0.63 0.33,-1.22 0.26,-1.93 -0.11,-1.05 -1.06,-3.33 -2.21,-3.65 -1.31,-0.37 -1.17,0.6 -1.56,1.21l-0.2 -0.19c-0.84,-0.96 -0.61,-0.56 -1.27,-1.09 0.16,-0.47 0.7,-1.32 0.98,-1.82 1.05,-1.91 1.94,-3.59 2.84,-5.61 0.73,0.01 1.23,0.31 1.57,0.68 -0.26,0.25 -1.37,0.7 -1.67,1.19 -0.51,0.8 -0.07,1.45 0.63,1.87 1.15,0.7 2.56,1.58 4.34,1.55 0.33,-0.09 0.46,-0.67 0.52,-0.98 0.28,-1.4 -0.01,-2.34 -0.66,-3.5 -0.49,-0.87 -0.67,-1.3 -1.44,-1.54 -1.15,-0.36 -1.27,0.44 -1.56,1.23 -0.65,-0.55 0.03,-0.23 -1.38,-1.25 0.22,-0.6 1.08,-2.59 1.06,-3.14 0.38,-0.35 0.52,-0.78 0.43,-1.4 0.22,-0.75 0.67,-4.16 0.53,-5 0.32,0.09 0.75,0.4 1.06,0.57 0.35,0.2 0.71,0.39 1.06,0.57 0.73,0.38 1.61,0.62 2.65,0.61 0.58,-0.21 0.64,-1.82 0.61,-2.32 -0.04,-0.79 -0.45,-1.64 -0.77,-2.19 -0.39,-0.68 -0.64,-1.3 -1.45,-1.52 -1.33,-0.36 -1.16,0.63 -1.55,1.24 -0.67,-0.66 -0.61,-0.87 -1.64,-1.37 -0.06,-2.55 -0.87,-5.97 -0.9,-6.74l0.15 -0.03 0.01 -0.03zm-14.34 62.71l-0.02 1.23c-0.17,-0.13 -0.38,-0.3 -0.62,-0.45 -0.2,-0.13 -0.4,-0.21 -0.59,-0.39 0.26,-0.28 0.65,-0.51 1.16,-0.55l0.07 0.15zm14.26 -66.46c-0.03,0.28 0.03,0.13 -0.15,0.29 -0.01,0.01 -0.24,0.12 -0.24,0.13 -0.22,0.12 -0.24,0.17 -0.54,0.21 0.01,-0.4 -0.17,-0.77 -0.25,-1.14 0.63,0.03 0.9,0.46 1.18,0.51zm-14.86 55.33c0.15,-0.05 0.34,-0.22 0.51,-0.31 0.29,-0.15 0.4,-0.14 0.78,-0.16 -0.03,0.41 -0.14,0.81 -0.08,1.19 -0.26,0.14 -0.08,0.13 -0.34,-0.03 -0.26,-0.16 -0.76,-0.47 -0.88,-0.69zm2.5 -3.73c0.16,-0.41 0.11,-0.97 0.32,-1.32 0.3,0.08 0.44,0.22 0.64,0.41 0.2,0.19 0.27,0.36 0.41,0.49 -0.16,0.21 0.06,0.08 -0.33,0.21 -0.1,0.03 -0.26,0.05 -0.36,0.08 -0.23,0.05 -0.43,0.12 -0.68,0.14zm0.14 8.74l-1.08 0.27c-0.09,-0.08 -0.07,0.14 -0.08,-0.17l0.07 -1.1c0.51,0.12 0.97,0.57 1.09,1.01zm-0.43 8.78c-0.17,0.02 -0.31,0.07 -0.44,0.1 -0.01,0 -0.23,0.03 -0.24,0.03 -0.22,-0.04 0,0.16 -0.14,-0.1l-0.01 -0.9c0.37,0.15 0.68,0.48 0.83,0.88zm7.48 -41.68c0.31,-0.02 0.51,-0.13 0.93,-0.12 0.35,0 0.54,0.09 0.82,0.17 -0.11,0.53 -0.59,0.91 -0.64,1.43 -0.25,-0.04 -0.12,0.01 -0.27,-0.15l-0.84 -1.31zm4.93 -8.23c-0.27,-0 -0.43,-0.17 -0.68,-0.32 -0.41,-0.23 -0.51,-0.16 -0.64,-0.47 0.15,-0.04 0.4,-0.31 0.62,-0.42 0.29,-0.15 0.49,-0.18 0.85,-0.23 0.05,0.51 -0.12,0.95 -0.14,1.43zm-12.94 26.21c0.63,-0.04 0.61,-0.21 1.47,-0.11l-0.33 1.55c-0.33,-0.14 -0.22,-0.21 -0.62,-0.71 -0.32,-0.39 -0.42,-0.39 -0.52,-0.74zm15.47 -33.38c-0.15,0.29 -0.36,0.33 -0.67,0.51 -0.26,0.15 -0.4,0.29 -0.69,0.42 -0.01,-0.23 0.02,-0.53 -0.08,-0.67l0.03 -0.86c0.33,0.01 0.6,0.1 0.83,0.21 0.22,0.11 0.42,0.34 0.58,0.38zm-12.41 30.37c0.14,-0.37 0.45,-1.36 0.68,-1.6 0.66,0.19 1.09,0.56 1.31,1.14 -0.34,0.04 -0.75,0.16 -1.08,0.25 -0.9,0.24 -0.77,0.49 -0.91,0.21z" className="fil0" />
                            </g>
                          </svg>
                        </div>
                      </button>
                    </Link>


                    {/* <div className="logo-rightbb ms-3">
                      <div className="fs-3 fw-bold" style={{ lineHeight: "1" }}>
                        Blockchain
                        <span className="fs-4 fw-bold" style={{ color: "#03e404" }}>
                          x
                        </span>
                      </div>
                      <span className="logo_subtext fw-bold text-light">
                        Decentralized Digital Ecosystem
                      </span>
                    </div> */}
                  </div>
                  {/* <h2 className="mt-3 text-light">Explore Blockchain Technology</h2>
                  <p className="text-gray mb-4">
                    Unlock the power of blockchain technology with secure transactions and transparency in all your dealings.
                  </p> */}
                  {/* <div className="hero-btns">
                    <Link
                      to="/apk/app-release (1).apk"
                      target="_blank"
                      download
                      className="download-apk btn btn-light text-dark"
                    >
                      <MdDownload className="fs-4 me-2" />
                      Download App
                    </Link>
                  </div> */}
                </div>
              </div>

              <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                <div className="hero-logo">
                  <img
                    src={bg3}
                    height="420px"
                    width="auto"
                    alt="Blockchain Technology"
                    className="hero-logo-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* About section */}
      <div id="about" className="about-section pt-5" style={{
        backgroundImage: ' `url(${bg1})`',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}>
        <div className="container" >
          <div className="row align-items-center about-container" style={{ gap: '120px' }}>
            <div className="col-md-4">
              <img
                src={bg2}
                alt="Blockchain about"
                className="about-image"
                loading="lazy"
              />
            </div>
            <div className="col-md-6 about-left">
              <h2 className="section-heading text-light">
                About <span style={{ color: "#ff5183" }}>Blockchain</span>
              </h2>
              <h4 style={{ fontWeight: "600" }} className="text-light">
                Why choose Blockchain for secure decentralized transactions?
              </h4>

              <p
                style={{
                  height: fullheight ? "fit-content" : "204px",
                  overflow: "hidden",
                  lineHeight: "28px",
                  color: "#f4f4f4",
                }}
              >
                Blockchain is the most advanced technology, enabling decentralized digital currencies, secure transactions, and transparent contract execution. The use of blockchain eliminates the need for intermediaries and ensures that the ecosystem remains trustless and transparent. Whether you're an investor, developer, or user, blockchain technology empowers you to transact securely and with peace of mind...
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Card section */}
      <div className="coreWorkIs" id="howitwork">
        <div className="container pt-130">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title text-center mb-50">

                <h2 className="title style2 text-light">How Blockchain Works</h2>
              </div>
            </div>
          </div>
          <div className="row gy-30">
            {/* Card 1: Decentralization */}
            <div className="col-md-6 col-lg-4 " >
              <div className="invest-card" style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
                border: '0.12rem solid',
                padding: '12px !important',
                borderImage: `conic-gradient(
            from var(--angle),
            var(--c2),
            var(--c1) 0.1turn,
            var(--c1) 0.15turn,
            var(--c2) 0.25turn
          )
          30`,
                animation: 'borderRotate var(--d) linear infinite forwards',
              }}>
                <div className="invest-card-icon" >
                  <img src="/Home Logo/Asset 3.png" alt="" className="col-2 mb-3" />
                  <div className="inv-div color-#1ecba3">Decentralization</div>

                  <p>
                    Blockchain allows for decentralized control, removing intermediaries in peer-to-peer transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Immutability */}
            <div className="col-md-6 col-lg-4">
              <div className="invest-card" style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
                border: '0.12rem solid',
                padding: '12px !important',
                borderImage: `conic-gradient(
            from var(--angle),
            var(--c2),
            var(--c1) 0.1turn,
            var(--c1) 0.15turn,
            var(--c2) 0.25turn
          )
          30`,
                animation: 'borderRotate var(--d) linear infinite forwards',
              }}>
                <div className="invest-card-icon">
                  <img src="/Home Logo/Asset 8.png" alt="" className="col-2 mb-3" />
                  <div className="inv-div">Immutability</div>
                  <p>
                    Blockchain records are immutable, ensuring that once data is added, it cannot be altered.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Security */}
            <div className="col-md-6 col-lg-4">
              <div className="invest-card" style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
                border: '0.12rem solid',
                padding: '12px !important',
                borderImage: `conic-gradient(
            from var(--angle),
            var(--c2),
            var(--c1) 0.1turn,
            var(--c1) 0.15turn,
            var(--c2) 0.25turn
          )
          30`,
                animation: 'borderRotate var(--d) linear infinite forwards',
              }}>
                <div className="invest-card-icon">
                  <img src="/Home Logo/Asset 1.png" alt="" className="col-2 mb-3" />
                  <div className="inv-div">Security</div>
                  <p>
                    Blockchain uses cryptographic algorithms to protect data and secure transactions against fraud.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Transparency */}
            <div className="col-md-6 col-lg-4">
              <div className="invest-card" style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
                border: '0.12rem solid',
                padding: '12px !important',
                borderImage: `conic-gradient(
            from var(--angle),
            var(--c2),
            var(--c1) 0.1turn,
            var(--c1) 0.15turn,
            var(--c2) 0.25turn
          )
          30`,
                animation: 'borderRotate var(--d) linear infinite forwards',
              }}>
                <div className="invest-card-icon">
                  <img src="/Home Logo/Asset 2.png" alt="" className="col-2 mb-3" />
                  <div className="inv-div">Transparency</div>
                  <p>
                    Blockchain's public ledger ensures that all transactions are transparent and traceable.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5: Smart Contracts */}
            <div className="col-md-6 col-lg-4">
              <div className="invest-card" style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
                border: '0.12rem solid',
                padding: '12px !important',
                borderImage: `conic-gradient(
            from var(--angle),
            var(--c2),
            var(--c1) 0.1turn,
            var(--c1) 0.15turn,
            var(--c2) 0.25turn
          )
          30`,
                animation: 'borderRotate var(--d) linear infinite forwards',
              }}>
                <div className="invest-card-icon">
                  <img src="/Home Logo/Asset 10.png" alt="" className="col-2 mb-3" />
                  <div className="inv-div">Smart Contracts</div>
                  <p>
                    Smart contracts automatically execute transactions once predefined conditions are met, reducing the need for intermediaries.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6: Mining */}
            <div className="col-md-6 col-lg-4">
              <div className="invest-card" style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
                border: '0.12rem solid',
                padding: '12px !important',
                borderImage: `conic-gradient(
            from var(--angle),
            var(--c2),
            var(--c1) 0.1turn,
            var(--c1) 0.15turn,
            var(--c2) 0.25turn
          )
          30`,
                animation: 'borderRotate var(--d) linear infinite forwards',
              }}>
                <div className="invest-card-icon">
                  <img src="/Home Logo/MINING.png" alt="" className="col-2 mb-3" />
                  <div className="inv-div">Mining</div>
                  <p>
                    Mining is the process of validating transactions and securing the blockchain network through computational power.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 7: Cryptocurrency */}
            <div className="col-md-6 col-lg-4">
              <div className="invest-card" style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
                border: '0.12rem solid',
                padding: '12px !important',
                borderImage: `conic-gradient(
            from var(--angle),
            var(--c2),
            var(--c1) 0.1turn,
            var(--c1) 0.15turn,
            var(--c2) 0.25turn
          )
          30`,
                animation: 'borderRotate var(--d) linear infinite forwards',
              }}>
                <div className="invest-card-icon">
                  <img src="/Home Logo/CRYPTO ICON.png" alt="" className="col-2 mb-3" />
                  <div className="inv-div">Cryptocurrency</div>
                  <p>
                    Cryptocurrency is a digital or virtual currency that uses cryptography for secure transactions within the blockchain.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 8: Distributed Ledger Technology (DLT) */}
            <div className="col-md-6 col-lg-4">
              <div className="invest-card" style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
                border: '0.12rem solid',
                padding: '12px !important',
                borderImage: `conic-gradient(
            from var(--angle),
            var(--c2),
            var(--c1) 0.1turn,
            var(--c1) 0.15turn,
            var(--c2) 0.25turn
          )
          30`,
                animation: 'borderRotate var(--d) linear infinite forwards',
              }}>
                <div className="invest-card-icon">
                  <img src="/Home Logo/DLT.png" alt="" className="col-2 mb-3" />
                  <div className="inv-div">DLT</div>
                  <p>
                    Distributed Ledger Technology (DLT) enables decentralized and secure data management without a central authority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* FAQ section */}
      <div id="faq" className="faq-section faqcard">
        <div className="container">
          <div className="section-title mb-50 text-center">
            <h2 className="title style2 text-light">Frequently Asked Questions</h2>
            <p className="sec-text text-light">
              Have questions? We're here to clarify everything about blockchain.
            </p>
          </div>
          <div className="row gy-40 justify-content-between align-items-center"> {/* Added align-items-center */}
            <div className="col-xl-4 text-xl-start d-flex justify-content-center"> {/* Centered image */}
              <div className="faq-thumb mt-1">
                <img src="/img/update/normal/faq_1-1.png" alt="img" className="faq-image" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8">
              <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="false"
                      aria-controls="collapse-1"
                    >
                      <span className="number">1</span> What is Blockchain Technology?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Blockchain is a decentralized digital ledger that records transactions across many computers. It ensures security and transparency in digital transactions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Add remaining questions here */}

                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      <span className="number">2</span> How does Blockchain ensure security?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Blockchain uses cryptographic hash functions to secure data, making it resistant to tampering and fraud.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      <span className="number">3</span> How do I use Blockchain?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Blockchain technology can be accessed through decentralized applications (dApps) and wallets to send, receive, and store cryptocurrencies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      <span className="number">4</span> What are Smart Contracts?
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Smart contracts are self-executing contracts with the terms directly written into code. They automatically execute transactions when predefined conditions are met.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-5"
                      aria-expanded="false"
                      aria-controls="collapse-5"
                    >
                      <span className="number">5</span> What are the advantages of Blockchain?
                    </button>
                  </div>
                  <div
                    id="collapse-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-5"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Blockchain offers transparency, security, decentralization, and immutability, making it ideal for various applications such as finance, supply chain, and healthcare.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-6"
                      aria-expanded="false"
                      aria-controls="collapse-6"
                    >
                      <span className="number">6</span> What is the future of Blockchain?
                    </button>
                  </div>
                  <div
                    id="collapse-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-6"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        The future of Blockchain is promising, with potential applications in decentralized finance (DeFi), non-fungible tokens (NFTs), and digital identity management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Disclaimer section */}
      <div id="disclaimer" className="disclaimer-section" style={{ color: "#fff", padding: "60px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50">
                <h2 className="title style2 text-light">Disclaimer</h2>
                <p className="sec-text">
                  Please read this disclaimer carefully before using our services.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-30">
            <div className="col-md-12">
              <div className="disclaimer-content">
                <p className="disclaimer-text">
                  The information provided on this website and the associated services are for informational purposes only. We make no representations or warranties about the accuracy, completeness, or reliability of the information provided. All users of this website should conduct their own research and exercise caution when making financial decisions.
                </p>
                <p className="disclaimer-text">
                  Cryptocurrency investments and blockchain-based applications involve inherent risks, including but not limited to market volatility, security threats, and regulatory uncertainties. We do not guarantee any returns or profits through the use of our services or products.
                </p>
                <p className="disclaimer-text">
                  By accessing or using this website, you acknowledge and agree that you are fully responsible for your actions and any consequences resulting from them. We are not liable for any losses, damages, or expenses incurred as a result of your use of this website or any associated services.
                </p>
                <p className="disclaimer-text">
                  It is recommended to consult with a qualified financial advisor before making any investment decisions. We reserve the right to modify or remove any content on this website at our discretion, without prior notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* footer section */}
      <footer className="footer-wrapper footer-layout1 position-relative mt-100">
        <div className="bg-gradient-1">
          <img src="/img/update/bg/bg-gradient1-1.jpg" alt="img" />
        </div>
        <div className="container">
          <div className="footer-menu-area m-0 p-0">
            <div className="row justify-content-center align-items-center">
              {/* <div className="col-xl-5 col-lg-12 d-flex w-100 justify-content-center align-items-center flex-wrap font-landing-footer">
                <span className="">Contract Address:</span>
                <a
                  className="ps-2 "
                  target="_blank"
                  href="https://www.google.com/maps/pr"
                >
                  place loction
                </a>

              </div> */}

            </div>
          </div>
        </div>
        <div className="copyright-wrap text-center text-lg-start">
          <div className="container">
            <div className="row gy-3 justify-content-between align-items-center">
              <div className="col-lg-6 align-self-center">
                <div className="social-btn justify-content-center justify-content-lg-start">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a href="https://instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-end footer-text-landing">
                <p className="copyright-text">
                  Copyright © TREND OCEAN 2025 All rights
                  reserved.
                </p>

                {/* <ul className="footer-links">
                            <li>
                                <a href="blog.html">
                                    Job & Career
                                </a>
                            </li>
                            <li>
                                <a href="contact.html">
                                    Terms and Condition
                                </a>
                            </li>
                            <li>
                                <a href="contact.html">
                                    Help Center
                                </a>
                            </li>
                        </ul> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;