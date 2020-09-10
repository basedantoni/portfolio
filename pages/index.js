import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'

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
    <div className="container bg-gray-1000 mx-auto w-4/5">
      <Head>
        <style>{'body { background-color: #16181c;}'}</style>
        <title>Anthony Mercado | Software Engineer</title>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      <section className="mx-auto">
        <div className="container mx-auto m-8 px-2 py-1">
          <h1 className="text-purple-500 text-4xl">Anthony Mercado</h1>
          <h2 className="text-gray-300 text-3xl">Software Engineer</h2>
        </div>
      </section>
      <section>
        <hr />
        <nav className="flex flex-row justify-center">
          <div className="text-center px-4 py-2 m-3">
            <Link href="/blog">
            <a className="text-purple-400 hover:text-purple-300" target="_blank">Blog</a>
            </Link>
          </div>
          <div className="text-center px-4 py-2 m-3">
            <a className="text-purple-400 hover:text-purple-300" href="https://github.com/basedantoni" target="_blank">Github</a>        
          </div>
          <div className="text-center px-4 py-2 m-3">
            <a className="text-purple-400 hover:text-purple-300" href="https://www.linkedin.com/in/anthony-mercado/" target="_blank">LinkedIn</a>
          </div>
        </nav>
      </section>
      <hr />
      <section>
        <div>
          <div>
            <div className="my-6">
              <h3 className="text-gray-300 text-3xl px-2 py-1">Hello World,</h3>
              <p className="text-gray-300 px-2 py-1">I am an eager software engineer open to any opportunity presented to me. I have a passion for not only software development, but for design as well. I enjoy working with complex systems with many moving parts and piecing them together to work elegantly. My favorite technologies are React, NodeJS, and GraphQL</p>
            </div>
            <div>
              {/* <img 
                className={`${utilStyles.headerImage} ${utilStyles.borderCircle}`} 
                src="/images/profile.png"
                alt="Anthony Mercado"
              /> */}
            </div>
          </div>
          <div>
            <div className="my-6">
              <h3 className="text-gray-300 text-3xl px-2 py-1">Get in Touch!</h3>
              <a className="text-purple-400 hover:text-purple-300 px-2 py-1">Email</a>
              <a className="text-purple-400 hover:text-purple-300 px-2 py-1" href="/files/resume.pdf" download="anthonymercado.pdf">Resume</a>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section>
        <div className="mt-4">
          <h3 className="text-gray-300 text-center text-4xl">Portfolio</h3>
              {projectData.map(project => (
                <Card project={project}></Card>
              ))}
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
      </section>
    </div>
  )
}