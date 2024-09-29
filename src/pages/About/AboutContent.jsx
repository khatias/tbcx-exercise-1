import React from 'react'
import './AboutContent.css'

function AboutContent() {
  return (
    <main>
    <p className='project-description'> 
        I am creating a restaurant website inspired by an existing example found online, specifically <a  href="https://www.wildginger.net/" target='blink'>Wild Ginger</a>.
        Currently, my project includes two pages: a Contact page featuring a form, and an About page providing information about the project. Throughout this development process, I have learned how to use React Router to create multiple pages and how to effectively use props in React.
    </p>
    </main>
  )
}

export default AboutContent