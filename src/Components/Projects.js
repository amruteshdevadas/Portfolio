import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { GoMarkGithub } from "react-icons/go";
import {SiNetlify} from "react-icons/si";
function Projects() {
  const projectInfo = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/amrutesh/image/upload/v1636378250/PortFolio%20Images/Blogging_akdrlg.png",
      github_repo: "https://github.com/amruteshdevadas/blogging-react",
      hosted_link: "https://blogging-b251-wd.netlify.app/",
      project_Name: "Blogging Application",
    },
    // {
    //   id: 2,
    //   image:
    //     "https://res.cloudinary.com/amrutesh/image/upload/v1636378240/PortFolio%20Images/Weather-App_wsk8bq.png",
    //   github_repo: "https://github.com/amruteshdevadas/weather",
    //   hosted_link: "https://waether-amrutesh-b251wd-api.netlify.app",
    //   project_Name: "Weather App",
    // },
    // {
    //   id: 3,
    //   image:
    //     "https://res.cloudinary.com/amrutesh/image/upload/v1636378251/PortFolio%20Images/Anime_Api_oxql9o.png",
    //   github_repo: "https://github.com/amruteshdevadas/AnimeAPI",
    //   hosted_link: "https://amrutesh-hackathon-b251wd.netlify.app/",
    //   project_Name: "Anime API",
    // },
    // {
    //   id: 4,
    //   image:
    //     "https://res.cloudinary.com/amrutesh/image/upload/v1636378243/PortFolio%20Images/Laud_Page_nji1xp.png",
    //   github_repo: "https://github.com/amruteshdevadas/laud-page",
    //   hosted_link: "https://laud-page-task-amrutesh-b251wd.netlify.app/",
    //   project_Name: "Laud Page",
    // },
    // {
    //   id: 5,
    //   image:
    //     "https://res.cloudinary.com/amrutesh/image/upload/v1636378237/PortFolio%20Images/ChuckNorris_jzq4v5.png",
    //   github_repo: "https://github.com/amruteshdevadas/chucknorris",
    //   hosted_link: "https://amrutesh-task-b251-wd-chuck-norris.netlify.app",
    //   project_Name: "Chuck Norris",
    // },
    // {
    //   id: 6,
    //   image:
    //     "https://res.cloudinary.com/amrutesh/image/upload/v1636378238/PortFolio%20Images/Cards_xb4ibl.png",
    //   github_repo: "https://github.com/amruteshdevadas/Pricing-Table",
    //   hosted_link: "https://pricing-table-task-amrutesh-b25g-wd.netlify.app",
    //   project_Name: "Cards",
    // },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/amrutesh/image/upload/v1636378241/PortFolio%20Images/DasBoardAdmin_juv1kv.png",
      github_repo: "https://github.com/amruteshdevadas/Sub-admin-task",
      hosted_link: "https://upbeat-blackwell-9821b4.netlify.app",
      project_Name: "Sub Admin",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/amrutesh/image/upload/v1636378243/PortFolio%20Images/RentalShop_edoghd.png",
      github_repo: "https://github.com/amruteshdevadas/react-rental",
      hosted_link: "https://rentalshop-b251-wd.netlify.app",
      project_Name: "Rental Shop",
    },
  ];
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { duration: 1.5, type: "spring", stiffness: 120 },
      });
    }

    if (!inView) {
      animation.start({
        x: "-100vw",
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 500,
          damping: 20,
        },
      });
    }
  }, [inView]);

  return (
    <>
      <section className="project py-5" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto projects">
                <h2>Projects </h2>
              </div>
              <Container>
                <Row ref={ref}>
                  {projectInfo &&
                    projectInfo.map((item) => {
                      return (
                        <Col xs={12} lg={4} md={6} className="Card">
                          <motion.div
                            animate={animation}
                            whileHover={{ scale: 1.2, rotate: -2, duration: 1 }}
                            // whileTap={{
                            //   scale: 0.8,
                            //   rotate: -90,
                            //   borderRadius: "100%",
                            // }}
                          >
                            <Card>
                              <Card.Img variant="top" src={item.image} />
                              <Card.Body>
                                <Card.Title>{item.project_Name}</Card.Title>
                              </Card.Body>
                              <Card.Body>
                                <Card.Link
                                  href={item.github_repo}
                                  target="_blank"
                                >
                                 <GoMarkGithub/>Source
                                </Card.Link>
                                <Card.Link href={item.hosted_link} target="_blank">
                                  <SiNetlify/>
                                  Visit
                                </Card.Link>
                              </Card.Body>
                            </Card>
                          </motion.div>
                        </Col>
                      );
                    })}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
