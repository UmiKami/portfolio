interface Props {
  title: string,
  description: string,
  technologies: string[],
  imageURL: string
}

const ProjectCard = ({title, description, technologies, imageURL}:Props) => {
  return <main >
    <h1>{title}</h1>
    <p>{description}</p>
    <p>{technologies}</p>
    <img src={require('../assets/rightPerson.png')} alt="some beautiful person" width={'100em'}/>
  </ main>
}

export default ProjectCard