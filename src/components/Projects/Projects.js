import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import BlogCard from './BlogsCards';
import Particle from '../Particle';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import airgng from '../../Assets/Projects/airgng.png';
import easymeals from '../../Assets/Projects/EasyMeals.png';
import goodbuilds from '../../Assets/Projects/GoodBuilds.png';
import spacehunt from '../../Assets/Projects/Spacehunt.png';
import quotesapi from '../../Assets/Projects/demotivationalapi.png';
import crazyeights from '../../Assets/Projects/crazyeights.png';

function Projects() {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					My Recent <strong className='purple'>Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{ justifyContent: 'center', paddingBottom: '10px' }}
				>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={easymeals}
							isBlog={false}
							title='Easy Meals'
							description='Meal planning app based on food groups. Nutrition calculator, save plates, favorite plates, and add to calendar.'
							link='https://github.com/clarion22/EasyMeals'
							livelink='https://eazymeals.herokuapp.com/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={spacehunt}
							isBlog={false}
							title='Space Hunt'
							description='SpaceHunt, a ProductHunt clone, is a curation of amazing outer space technology development projects.'
							link='https://github.com/clarion22/Space-Hunt'
							livelink='https://spacehunt.herokuapp.com/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={airgng}
							isBlog={false}
							title='AirGng'
							description='AirBnb clone, AirGnG is an aircraft booking and review service.'
							link='https://github.com/dunnjm814/air_gng'
							livelink='https://air-gng.herokuapp.com/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={goodbuilds}
							isBlog={false}
							title='Good Builds'
							description='Review and rating app that harnesses community engagement to improve the experience of selecting, buying and building flat pack furniture'
							link='https://github.com/andrewscohen/2020-Oct-GoodBuilds'
							livelink='https://goodbuilds1.herokuapp.com/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={quotesapi}
							isBlog={false}
							title='Demotivational Quotes API'
							description='REST API for serving demotiational quotes. Built with Express.Js and MongoDb.'
							link='https://github.com/clarion22/demotivational-quotes-api'
							livelink='https://demotivational-quotes-api.herokuapp.com/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={crazyeights}
							isBlog={false}
							title='Crazy Eights'
							description='Crazy Eights game wih AI player. Built with React and Redux.'
							link='https://github.com/clarion22/crazy-eights'
							livelink='https://clarion22.github.io/crazy-eights/'
						/>
					</Col>
				</Row>
				{/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
			</Container>
		</Container>
	);
}

export default Projects;
