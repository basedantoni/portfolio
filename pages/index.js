import Head from 'next/head'
import Link from 'next/link'
import { Container, Col, Row, Card } from 'react-bootstrap'
import { getProjects } from '../lib/projects'

export async function getStaticProps() {
  const projectData = await getProjects()
  return {
    props: {
      projectData
    }
  }
}

export default function HomePage({ projectData }) {
  return (
    <div>
      <Head>
        <title>Anthony Mercado | Software Engineer</title>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      <section>
        <Container>
          <h1 className="mt-4">Anthony Mercado</h1>
          <h2 className="mb-4">Software Engineer</h2>
        </Container>
      </section>
      <section>
        <Container>
          <hr/>
          <Row>
            <Col className="text-center">
              <Link href="/blog">
              <a target="_blank">Blog</a>
              </Link>
            </Col>
            <Col className="text-center">
              <a href="https://github.com/basedantoni" target="_blank">Github</a>        
            </Col>
            <Col className="text-center">
              <a href="https://www.linkedin.com/in/anthony-mercado/" target="_blank">LinkedIn</a>
            </Col>
          </Row>
          <hr />
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <h3 className="mt-4" >Hello World,</h3>
              <p>I am an eager software engineer open to any opportunity presented to me. I have a passion for not only software development, but for design as well. I enjoy working with complex systems with many moving parts and piecing them together to work elegantly. My favorite technologies are React, NodeJS, and GraphQL</p>
            </Col>
            <Col className="my-auto text-center">
              {/* <img 
                className={`${utilStyles.headerImage} ${utilStyles.borderCircle}`} 
                src="/images/profile.png"
                alt="Anthony Mercado"
              /> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="mt-5">Get in Touch!</h3>
              <a className="px-3">Email</a>
              <a className="px-3" href="/files/resume.pdf" download="anthonymercado.pdf">Resume</a>
            </Col>
          </Row>
          <hr />
        </Container>
      </section>
      <section>
        <Container>
          <h3 className="text-center">Portfolio</h3>
          <Row>
            {projectData.map(({ id, title, shortDescription, fullDescription, image }) => (
              <Card key={id} style={{ width: '18rem' }} className="m-2">
                <Card.Img variant="top" src={image.url} />
                <Card.Body>
                  <Card.Title>{ title }</Card.Title>
                  <Card.Text>{ shortDescription }</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  )
}