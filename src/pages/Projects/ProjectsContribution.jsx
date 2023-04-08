import ProjectCart from "./ProjectCart"
import myProjectsContribution from "../../data/myProjectsContribution"

const ProjectsContribution = () => {
    return (
        <div className='overflow-hidden scrollbar-hide pb-20 relative' id='projectsc'>
            <p className='text-2xl text-primary md:text-4xl font-bold text-center pt-20 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-secondary'>
                Projects Contribution
            </p>
            <div className='flex flex-col pt-24'>
                {myProjectsContribution.map((itemData, index) => (
                    <ProjectCart {...itemData} index={index} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsContribution
