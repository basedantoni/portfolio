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
    <div className="container bg-gray-1000 mx-auto w-4/5 lg:w-1/2">
      <Head>
        <style>{'body { background-color: #16181c;}'}</style>
        <title>Anthony Mercado | Software Engineer</title>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      <section className="mx-auto">
        <div className="container mx-auto m-5 px-2 py-1 ">
          <h1 className="text-teal-500 text-3xl md:text-5xl">Anthony Mercado</h1>
          <h2 className="text-gray-300 text-2xl md:text-3xl">Software Engineer</h2>
        </div>
      </section>
      <section>
        <hr className="border-gray-500" />
        <nav className="flex flex-row justify-center items-center">
          <div className="text-center px-4 py-2 m-3 md:mx-auto">
            <Link href="/blog">
            <a target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current text-teal-500 hover:text-teal-300" viewBox="0 0 24 24"><path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z"/></svg></a>
            </Link>
          </div>
          <div className="text-center px-4 py-2 m-3 md:mx-auto">
            <a href="https://github.com/basedantoni" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current text-teal-500 hover:text-teal-300" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg></a>        
          </div>
          <div className="text-center px-4 py-2 m-3 md:mx-auto">
            <a href="https://www.linkedin.com/in/anthony-mercado/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current text-teal-500 hover:text-teal-300" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
          </div>
        </nav>
      </section>
      <hr className="border-gray-500"/>
      <section>
        <div>
          <div className="flex">
            <div className="my-6 md:my-10">
              <h3 className="text-gray-300 text-2xl px-2 py-1">Hello World,</h3>
              <p className="text-gray-300 px-2 py-1">I'm Anthony, an avid software engineer looking to jump-start my professional career. I have a passion for not only software development, but for design as well. I enjoy working with complex systems with many moving parts and piecing them together to work elegantly. My favorite technologies are React, NodeJS, and GraphQL</p>
            </div>
            <div className="hidden md:flex flex-wrap justify-center">
              <div className="w-7/12 px-4 py-4">
                <img src="/images/profile.png" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4 md:my-10">
              <h3 className="text-gray-300 text-2xl px-2 py-1">Get in Touch!</h3>
              <a className="text-teal-400 hover:text-teal-300 px-2 py-1">Email</a>
              <a className="text-teal-400 hover:text-teal-300 px-2 py-1" href="/files/resume.pdf" download="anthonymercado.pdf">Resume</a>
            </div>
          </div>
          <hr className="border-gray-500"/>
        </div>
      </section>
      <section>
        <div className="mt-4">
          <h3 className="text-gray-300 text-center text-4xl">Portfolio</h3>
          <div className="flex flex-wrap justify-center">
            {projectData.map(project => (
                <Card key={project.id} project={project}></Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}