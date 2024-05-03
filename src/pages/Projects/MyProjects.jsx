import ProjectCart from "./ProjectCart"
import myProjectsItem from "../../data/myProjectsItem"
import myProjectsContribution from "../../data/myProjectsContribution"

const MyProjects = () => {
    return (
        <>
            <div className='relative w-full md:pt-20 pt-12' id='projectsc'>
                <p className='headerTitle'>Projects Contribution</p>
                {myProjectsContribution.map((itemData, index) => (
                    <ProjectCart {...itemData} index={index} key={index} />
                ))}
            </div>
            <div className='relative w-full md:pt-20 pt-12' id='projects'>
                <p className='headerTitle'>My Projects</p>
                {myProjectsItem.map((itemData, index) => (
                    <ProjectCart {...itemData} index={index} key={index} />
                ))}
            </div>
        </>
    )
}

export default MyProjects
