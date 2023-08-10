import ProjectCart from "../components/ProjectCart"
import myProjectsItem from "../data/myProjectsItem.json"
import myProjectsContribution from "../data/myProjectsContribution.json"
import { Grid } from "@mui/material"

const MyProjects = () => {
  const importAll = (r) => r.keys().map(r)
  const img = importAll(require.context("../images/logo", false, /\.(png|jpe?g|svg)$/))
  return (
    <>
      <div className='relative w-full md:pt-20 pt-12' id='projectsc'>
        <p className='headerTitle mb-10'>Projects Contribution</p>
        <Grid container>
          {myProjectsContribution.map((itemData, index) => (
            <ProjectCart {...itemData} key={index} />
          ))}
        </Grid>
      </div>
      <div className='relative w-full md:pt-20 pt-12' id='projects'>
        <p className='headerTitle mb-10'>My Projects</p>
        <Grid container>
          {myProjectsItem.map((itemData, index) => (
            <ProjectCart {...itemData} key={index} />
          ))}
        </Grid>
      </div>
      <div className='relative w-full lg:h-screen md:pt-40 pt-12' id='with'>
        <p className='mb-10 text-3xl text-white text-center'>
          I'm proud to have collaborated with some awesome companies:
        </p>
        <Grid container mt={20}>
          {img.map((title) => (
            <Grid xs={6} sm={6} md={4} lg={4} className='gap-4 p-4'>
              <div className='flex justify-center items-center'>
                <img
                  src={title}
                  alt='images'
                  style={{ width: "50%", height: "auto", padding: "2rem" }}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default MyProjects
