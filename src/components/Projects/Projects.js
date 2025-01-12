import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Movie from "../../Assets/Projects/Movie.png";
import FoodMania from "../../Assets/Projects/FD.png";
import GYM from "../../Assets/Projects/GYM.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodMania}
              isBlog={false}
              title="Food Mania"
              description="Engineered a full-stack web application, Food Mania Web Application, using MERN Stack. Integrated functionalities for booking hotel rooms and reserving dining tables, with dynamic pricing models. Developed a robust cart solution for food ordering, incorporating real-time item management where user can add, remove, update quantities of items. Included a functionality to estimate delivery time based on user location, including distance validation, and integrated PDF generation for generating invoices related to both bookings and food orders."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GYM}
              isBlog={false}
              title="GYM Website"
              description=" Developed a fully responsive website using ReactJS, MongoDB, CSS, and Bootstrap, providing users with seamless accessacross devices.• Implemented user authentication with secure sign-up and login functionalities, ensuring smooth access to personalizedgym information• Integrated detailed sections for gym locations, trainers, exercises, and membership options, along with input validation toenhance user experience.• Designed and displayed comprehensive gym schedules and client reviews, helping users make informed decisions abouttheir fitness routines"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie Review Project"
              description="Developed a responsive movie review platform using Django, Python, HTML, and CSS, enabling users to sign up, log in,and search for reviews seamlessly.• Implemented features for redirection to IMDb movie pages and integrated a news feed for real-time movie-relatedupdates, enhancing user engagement.• Built a search functionality to filter movie reviews, improving the user experience by providing easy access to relevantcontent.• Designed a user-friendly interface with responsive design, ensuring an optimal experience across devices and screen sizes"             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
