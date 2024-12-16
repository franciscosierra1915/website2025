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
              <h1>Hello world :)</h1>
              <p>My name is Francisco Sierra, but you can call me Frank! I'm a UX Developer who loves 3D animations on the web. I write code that merges these things.</p>
              <div className="social-media">
                <a href="https://www.linkedin.com/in/francisco-sierra-munoz/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIN icon" /></a>
                <a href="https://github.com/franciscosierra1915" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github icon" /></a>
                <a href="https://twitter.com/franksierra_" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter icon" /></a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <p>Code:</p>
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
