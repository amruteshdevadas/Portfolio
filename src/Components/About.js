import React from "react";
import image from '../images/Developer .png'
import {motion} from 'framer-motion'
import {ImDownload3} from 'react-icons/im'
import Button from "@restart/ui/esm/Button";
function About() {
  return (
    <>
      <motion.section
        className="about full-screen d-lg-flex justify-content-center align-items-center"
        id="about"
        initial={{ opacity: 0 ,x:'-100vw'}}
        animate={{ opacity: 1,x:'0',type:'spring',stiffness:120}}
        transition={{duration:2}}      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
              <div className="about-text">
                <small className="small-text">
                  Welcome to{" "}
                  <span className="mobile-block">my portfolio website!</span>
                </small>
                <h1 className="animated animated-text">
                  <span className="mr-2">Hey folks, I'm</span>
                  <br/>
                  <div className="animated-info">
                    <span className="animated-item">Amrutesh Devadas</span>
                    <span className="animated-item">Full Stack Developer</span>
                  </div>
                </h1>
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{delay :2, duration:1}} 
                >
                  I am an Automation and Robotics Engineer who is passionate in building Websites and Web Applications.
                </motion.p>

                <div className="custom-btn-group mt-4">
                  <Button href="https://drive.google.com/uc?export=download&id=1593uUenwL67nf-r5-GZW5wM26XL6wjIx" className=" mr-lg-2 custom-btn">
                    <ImDownload3/> Download Resume
                  </Button>
                  <Button
                    href="#contact"
                    className="custom-btn custom-btn-bg custom-btn-link"
                  >
                    Get a free quote
                  </Button>
                </div>
                
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-12">
              <div className="about-image svg">
                <img
                  src={image}
                  className="img-fluid"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default About;
