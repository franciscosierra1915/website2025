import './App.css'
import { Container, Row, Col } from 'react-bootstrap';
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import github from "./assets/github.png";
import frank from "./assets/frank.jpg";

function App() {

  return (
    <main>
      <Container>
        <Row className="about-me">
          <Col className="headshot-container">
            <div className="headshot-container">
              <img src={frank} alt="Heahdshot of Francisco Sierra" className='headshot' />
            </div>
          </Col>
          <Col className="bio-container">
            <div className="bio">
              <h1>Francisco Sierra</h1>
              <p>I am a User Experience Developer passionate about digital gardening and functional programming.</p>
              <p></p>
              <div className="social-media">
                <a href="https://www.linkedin.com/in/francisco-sierra-munoz/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIN icon" /></a>
                <a href="https://github.com/franciscosierra1915" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github icon" /></a>
                <a href="https://twitter.com/franksierra_" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter icon" /></a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <p>Currently, I am pursuing a Bachelor's degree in Computer Science at <a href="https://www.cis.fiu.edu/degree/b-a-computer-science/" target="_blank" rel="noopener noreferrer">Florida International University (FIU)</a>, focusing on designing and coding interfaces for A.I. In addition to my studies, I work part-time as a Project Manager at <a href="https://www.fibextelecom.net/" target="_blank" rel="noopener noreferrer">Fibex Telecom</a>, where I oversee the development of an eCommerce platform. I actively apply Agile methodologies, and  utilize Microsoft Planner to drive projects forward.</p>
            <p>View my <a href="https://docs.google.com/document/d/1b9gumNaMtXWJgmzTUnxxeia7UNM9Tm3ZQdKJd-p9Lww/edit?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a>.</p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>My <a href="https://tricky-salsa-a9e.notion.site/Digital-Garden-5f056e76a6b0486f97fd6383d134bd1e?pvs=74" target="_blank" rel="noopener noreferrer">digital garden</a> is a curated collection of evolving notes and lists that reflect my interests and curiosities. It’s home to my favorite books, audiobooks, movies, TV shows, podcasts, theater productions, photographers, and blogs. I also tend to a collection of meaningful quotes that I regularly prune and cultivate, alongside an 'anti-library'—a list of works I’m fascinated by but have yet to explore. This garden flourishes in Notion, a tool I’ve trusted and enjoyed for over five years now.</p>
            <hr />
          </Col>
        </Row>
        <Row>
          <p>I love the creative side of code and 3D animations on the web. Here are some of the experiments I have been working on lately:</p>
          <Col lg={6}>
            Phaser.js:
            <ul>
              <li>
                <a href="https://franciscosierra1915.github.io/codeys_counting/" target="_blank" rel="noopener noreferrer">Codey's Counting Conundrum</a>
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            ThreeJS:
            <ul>
              <li>
                <a href="https://tech-friend-64422.web.app/" target="_blank" rel="noopener noreferrer">Tech Friend</a>
              </li>
              <li>
                <a href="https://franciscosierra1915.github.io/fox/" target="_blank" rel="noopener noreferrer">Animated model with Blender</a>
              </li>
              <li>
                <a href="https://interactive-tic-tac-toe.web.app/" target="_blank" rel="noopener noreferrer">Interactive Tic-Tac-Toe</a>
              </li>
              <li>
                <a href="https://franciscosierra1915.github.io/sea-of-particles/" target="_blank" rel="noopener noreferrer">Sea of Particles</a>
              </li>
              <li>
                <a href="https://franciscosierra1915.github.io/scroll-three-js/" target="_blank" rel="noopener noreferrer">Scroll Animation</a>
              </li>
              <li>
                <a href="https://franciscosierra1915.github.io/interactive-galaxy/" target="_blank" rel="noopener noreferrer">Interactive Galaxy</a>
              </li>
              <li>
                <a href="https://franciscosierra1915.github.io/3d-text/" target="_blank" rel="noopener noreferrer">3D Text</a>
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            React Three Fiber:
            <ul>
              <li>
                <a href="https://franciscosierra1915.github.io/bananas/" target="_blank" rel="noopener noreferrer">Apples</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default App