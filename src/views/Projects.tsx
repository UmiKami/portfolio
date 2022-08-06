import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import CallToActionText from '../components/CallToActionText';
import ProjectCard from '../components/ProjectCard';

const Projects:React.FC = () => {
  useEffect(()=>{
    document.title = "Ernesto Gonzalez | Projects"
  }, [])

  const projectInfo:{title: string, description: string, technologies:string[], imageURL:string}[] = [
    {
      title: "SERC-BOTS",
      description: "Web app that eases the job application process by scrapping sites such as LinkedIn and automatically applying to jobs based on the user's preferences. ",
      technologies: ["Python", "Flask", "SQLAlchemy", "ReactJS"],
      imageURL: "../assets/rightPerson.png"
    },
    {
      title: "Breakful",
      description: "Web app that eases the job application process by  ",
      technologies: ["Firebase", "GoogleAPI", "Redux", "ReactJS"],
      imageURL: "../assets/rightPerson.png"
    },
    {
      title: "Midas",
      description: "Web app tby scrapping sites such as LinkedIn and automatically applying to jobs based on the user's preferences. ",
      technologies: ["Express", "JWT", "Redux", "ReactJS"],
      imageURL: "../assets/rightPerson.png"
    },
  ]

  return <main className='proj'> 
    <Navbar/>
    <Container>
      <header className='proj-sectionHeader'>Top 3</header>
      <section className='proj-card-container'>
        {
          projectInfo.map(({title, description, technologies, imageURL}) => {
            return <ProjectCard title={title} description={description} technologies={technologies} imageURL={imageURL} key={Math.random()*100}/>
          })
        }
      </section>
      <CallToActionText beforeLinkText='Checkout out other projects on' linkText='my github' afterLinkText='' link='https://github.com/umikami'/>
    </Container>
  </main>
}

export default Projects