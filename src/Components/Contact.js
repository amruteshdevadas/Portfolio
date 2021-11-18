import React from "react";
import { config } from "dotenv";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "emailjs-com";
function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const animation = useAnimation();

  const initialValues = {name: "", email: "", message: ""};

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,

        transition: {
          duration: 2,
          type: "spring",
          stiffness: 120,
          damping: 20,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "100vw",
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 120,
          damping: 20,
        },
      });
    }
  }, [inView]);

  const handleSubmit = (e) => {
   try {
    emailjs.send(`${process.env.REACT_APP_EMAIL_SERVICE_ID}`,`${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`,e,`${process.env.REACT_APP_USER_ID}`)

    .then((result) => {
     
      window.alert("Your message has been sent!");
      window.location.reload();
    })
     
   } catch (error) {
      console.log(error)
      window.alert("There was an error sending your message. Please try again later.") 
   }
  };

  

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    else if (values.message.length < 20) {
      errors.message = "Message must be at least 20 characters";
    }
    return errors;
  };

  return (
    <>
      <section ref={ref} className="contact py-5" id="contact">
        <motion.div animate={animation} className="container">
          <div className="row">
            <div className="col-lg-5 mr-lg-5 col-12">
              <div className="google-map w-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30776.988787799546!2d75.1131391020963!3d15.369791097278586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d735b36a91c7%3A0xb0bf47bcf5489c8b!2sVidya%20Nagar%2C%20Hubli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635924398987!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                <div className="contact-info-item">
                  <h3 className="mb-3 text-white">Say hello</h3>
                  <p className="footer-text mb-0">010 020 0960</p>
                  <p>
                    <a href="mailto:hello@company.co">
                      amruteshdevadas@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="contact-form">
                <h2 className="mb-4">
                  Interested to work together? Let's talk
                </h2>
             
                  <Formik
                    validate={validate}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                  >
                       <Form>
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <Field
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your Name"
                          id="name"
                        ></Field>
                        <ErrorMessage name="name">
                          {(error) => <h6 className="link-danger">{error}</h6>}
                        </ErrorMessage>
                      </div>

                      <div className="col-lg-6 col-12">
                        <Field
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          id="email"
                          // value={userName.email}
                          // onChange={handleChange}
                        />
                        <ErrorMessage name="email">
                          {(error) => <h6 className="link-danger">{error}</h6>}
                        </ErrorMessage>
                      </div>

                      <div className="col-12">
                        <Field
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Message"
                          // value={userName.message}
                          // onChange={handleChange}
                        ></Field>
                        <ErrorMessage name="message">
                          {(error) => <h6 className="link-danger">{error}</h6>}
                        </ErrorMessage>
                      </div>

                      <div className="ml-lg-auto col-lg-5 col-12">
                        <input
                          type="submit"
                          className="form-control submit-btn"
                        />
                      </div>
                    </div>
                    </Form>
                  </Formik>
                
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Contact;
