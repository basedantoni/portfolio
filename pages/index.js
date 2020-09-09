import Head from 'next/head'
import Link from 'next/link'

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
        <div>
          <h1 className="mt-4">Anthony Mercado</h1>
          <h2 className="mb-4">Software Engineer</h2>
        </div>
      </section>
      <section>
        <div>
          <hr/>
          <div>
            <div className="text-center">
              <Link href="/blog">
              <a target="_blank">Blog</a>
              </Link>
            </div>
            <div className="text-center">
              <a href="https://github.com/basedantoni" target="_blank">Github</a>        
            </div>
            <div className="text-center">
              <a href="https://www.linkedin.com/in/anthony-mercado/" target="_blank">LinkedIn</a>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section>
        <div>
          <div>
            <div>
              <h3 className="mt-4" >Hello World,</h3>
              <p>I am an eager software engineer open to any opportunity presented to me. I have a passion for not only software development, but for design as well. I enjoy working with complex systems with many moving parts and piecing them together to work elegantly. My favorite technologies are React, NodeJS, and GraphQL</p>
            </div>
            <div className="my-auto text-center">
              {/* <img 
                className={`${utilStyles.headerImage} ${utilStyles.borderCircle}`} 
                src="/images/profile.png"
                alt="Anthony Mercado"
              /> */}
            </div>
          </div>
          <div>
            <div>
              <h3 className="mt-5">Get in Touch!</h3>
              <a className="px-3">Email</a>
              <a className="px-3" href="/files/resume.pdf" download="anthonymercado.pdf">Resume</a>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-center">Portfolio</h3>
          <div>
            {/* {projectData.map(({ id, title, shortDescription, fullDescription, image }) => (
              <Card key={id} style={{ width: '18rem' }} className="m-2">
                <Card.Img variant="top" src={image.url} />
                <Card.Body>
                  <Card.Title>{ title }</Card.Title>
                  <Card.Text>{ shortDescription }</Card.Text>
                </Card.Body>
              </Card>
            ))} */}
          </div>
        </div>
      </section>
    </div>
  )
}