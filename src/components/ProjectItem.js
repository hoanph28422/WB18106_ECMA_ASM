
const ProjectItem = ({ project }) => {
  return (
    `<h4>${project.title}</h4>
    <p>${project.content}</p>
    `
  )
}

export default ProjectItem