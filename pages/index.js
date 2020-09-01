import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Anthony Mercado | Software Engineer</title>
      </Head>
      <section>
        <h1>Anthony Mercado</h1>
        <h2>Software Engineer</h2>
        <img 
          className={`${utilStyles.headerImage} ${utilStyles.borderCircle}`} 
          src="/images/profile.png"
          alt="Anthony Mercado"
        />
      </section>
      <hr/>
      <section>
        <Link href="/blog">
          <a target="_blank">Blog</a>
        </Link>
        <a href="https://github.com/basedantoni" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/anthony-mercado/" target="_blank">LinkedIn</a>
      </section>
      <hr />
      <section>
        <h3>Get in Touch!</h3>
        <a>Email</a>
        <a href="/files/resume.pdf" download="anthonymercado.pdf">Resume</a>
        <h3>Hello World,</h3>
        <p>I am an eager software engineer open to any opportunity presented to me. I have a passion for not only software development, but for design as well. I enjoy working with complex systems with many moving parts and piecing them together to work elegantly. My favorite technologies are React, NodeJS, and GraphQL</p>
      </section>
      <hr />
      <section>
        <h3>Portfolio</h3>
      </section>
    </div>
  )
}