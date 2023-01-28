import ProjectCart from "./ProjectCart"
import projectsItem from "../../data/projectsItem.json"

const Projects = () => {
  return (
    <div
      className='overflow-hidden scrollbar-hide pb-20 relative'
      id='projects'>
      <p className='text-2xl text-rose-600 md:text-4xl font-bold text-center pt-20 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-rose-600'>
        My Projects
      </p>
      <div className='flex flex-col pt-24'>
        {projectsItem.map((itemData) => (
          <ProjectCart {...itemData} />
        ))}
      </div>
    </div>
  )
}

export default Projects
